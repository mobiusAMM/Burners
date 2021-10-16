//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./dexs/IWrapper.sol";
import "./OpenMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract OpenRouter is Ownable {
    using OpenMath;
    IWrapper[] dexs;
    IERC20[] supportedTokens;
    mapping(address -> string) dexNames;
    uint256 numTokens;
    uint256 fee = 5 * (10 ** 7);
    uint256 FEE_DENOM = 10 ** 10;

    function addAmm(address dexAddress, string name) external onlyOwner {
        require(dexNames[dexAddress] == "", "DEX has alread been added");
        known[dexAddress] = name;
        dexs.push(dexAddress);
    }

    function addToken(address newToken) external onlyOwner {
        for (uint i = 0; i < supportedTokens.length; i++) {
            require(supportedTokens[i] != newToken, "Token already added");
        }
        supportedTokens.add(newToken);
        numTokens++;
    }

    function getBestExchange(address tokenIn, address tokenOut, uint256 amountIn) public view returns (int256 rate, address exchange) {
        uint256 amountOut = 0;
        for (uint i = 0; i < dexs.length; i++) {
            uint256 quote = ISwap(dexs[i]).getQuote(tokenIn, tokenOut, amountIn);
            if (quote > amountOut) {
                amountOut = quote;
                exchange = dexs[i];
            }
        }
        rate = OpenMath.exchangeRate(amountIn, amountOut)
    }

    function fillBoard(uint256 tokenFromIndex) public view returns (int256[][] memory exchangeRates, address[][] memory exchanges, int256[] memory pathTo, uint256[] parents, bool arbExists) {
        exchangeRates = new int256[][](numTokens)(numTokens);
        exchanges = new address[][](numTokens)(numTokens);
        pathTo = new int256[](numTokens);
        parents = new int256[](numTokens);

        for (uint i = 0; i < numTokens; i++) {
            pathTo[i] = OpenMath.MAX_INT;
            if (i == tokenFromIndex) {
                pathTo[i] = 0;
            }
            for (uint i = 0; i < numTokens; i++) {
                IERC20 tokenIn = supportedTokens[i]
                for (uint j = 0; j < numTokens; j++) {
                    (int256 rate, address exchange) = getBestExchange(tokenIn, supportedTokens[j], 10 ** tokenIn.decimals())
                    exchanges[i][j] = exchange;
                    exchangeRates[i][j] = OpenMath.log2(-1 * rate);
                }
            }

        }

        {
            bool improved = true;
            uint iteration = 0;
            while (iteration < numTokens && improved) {
                improved = false;
                iteration++;
                for (uint i = 0; i < numTokens; i++) {
                    int256 curCost = pathTo[i]
                    for (uint j = 0; j < numTokens; j++) {
                        if (curCost + exchangeRates[i][j] < pathTo[j]) {
                            pathTo[j] = curCost + exchangeRates[i][j];
                            improved = true;
                            parents[j] = i;
                        }
                    }
                }
                if (iteration == numTokens) {
                    arbExists = improved;
                }
            }
        }
    }

    function getPathFromBoard(uint tokenFromIndex, uint tokenOutIndex, int256[][] memory exchangeRates, address[][] memory exchanges, int256[] memory pathTo,uint256[] parents) public returns (address[] memory tokenPath, address[] memory exchangePath) {
        tokenPath = new address[]();
        exchangePath = new address[]();
        uint curIndex = tokenOutIndex;
        uint iterations = 0; 

        while (curIndex != tokenFromIndex) {
            require(iterations++ < numTokens, "No path exists");
            uint parent = parents[curIndex];
            tokenPath.push(supportedTokens[curIndex]);
            exchangePath.push(exchanges[parent][curIndex]);
            curIndex = parent;
        }
        tokenPath.push(tokenFromIndex);
        for (uint i = 0; i <= tokenPath.length / 2; i++) {
            address tmp = tokenPath[i];
            tokenPath[i] = tokenPath[tokenPath.length - i];
            tokenPath[tokenPath.length - i] = tmp;
            if ( i <= exchangePath.length / 2) {
                tmp = exchangePath[i];
                exchangePath[i] = exchangePath[exchangePath.length - i];
                exchangePath[exchangePath.length - i] = tmp;
            }
        }
    }

    function swap(address[] tokenPath, address[] exchangePath, uint256 amountIn, uint256 minAmountOut, address recipient) public returns (uint256 actualAmountOut) {
        require (tokenPath.length > 1, "Path must contain atleast two tokens");
        require(exchangePath.length == tokenPath.length - 1, "Exchange path incorrect length");
        IERC20 inputToken = IERC20(tokenPath[0]);
        require (inputToken.transferFrom(msg.sender, address(this), amountIn), "Transfer failed");
        actualAmountOut = amountIn;
        for (uint i = 0; i < exchangePath.length; i++) {
            inputToken = IERC20(tokenPath[i]);
            IERC20 outToken = IERC20(tokenPath[i + 1]);
            uint256 startingBalance = outToken.balanceOf(address(this));
            address exchange = exchangePath[i];
            require (inputToken.approve(exchange, actualAmountOut), "Approval failed");

            IWrapper(exchange).swap(inputToken, outToken, inputAmount, 0);
            actualAmountOut = outToken.balanceOf(address(this)) - startingBalance;
        }
        uint256 swapFee = (actualAmountOut * fee) / FEE_DENOM;
        actualAmountOut -= swapFee;

        require(actualAmountOut >= minAmountOut, "Slippage was too high");
        IERC20(tokenPath[tokenPath.length - 1]).transfer(recipient, actualAmountOut);
    }

    

}