# Week 6

## 27/7/21

### Algorithms

#### Intro to algorithms

##### What is an algorithm and why should you care?

- an algorithm is a set of steps to accomplish a task
- knowing good algorithms will help you write good code
- important to know the limitations of existing algorithms and when to use them
- important to know how to design new algorithms and analyze their correctness and efficiency
- a good algorithm, solves a problem (correctness) and does so efficiently
- sometimes the most correct solutions are not the most efficient
- sometimes you need to write a good algorithm, as opposed to a perfect one, for the sake of efficiency
- you measure algorithm efficiency with asymptotic analysis, allows for analysis of algorithms independent of hardware or data

##### A guessing game

- guessing numbers sequentially is a linear search, all the numbers are guessed as though they are lined up in a row, on average would take 8 guesses
- there is a more efficient way
- start in the middle
- computer says high or low
- go to the middle of that range and repeat
- this is called a binary search and takes at most 4 guesses

##### Route-finding

- sometimes different sounding problems are similar to solve

#### Binary search

##### Binary search

- it's an efficient algorithm for finding an item from a sorted list
- halves the portion of the list that could contain the item until the item is found
- commonly used to find an item in an array
- algorithms need to be described completely

##### Running time of binary search

- binary search cuts the remaining search area by half with each incorrect guess
- for an array of n elements, the number of guesses is log2(n)+1
- for a non integer, we round down
