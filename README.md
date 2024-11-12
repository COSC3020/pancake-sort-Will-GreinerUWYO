# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

The main loop of my code runs once for each element of the list, as n is set to equal the length of the list. For each element of the list, flip is called twice. Once to get the biggest pancake to the top of the stack, and then once more to get that pancake on top of the already sorted list.
So the runtime ($\Theta$) for this algorithm is ($\Theta$) $(n^2)$.

## Sources and Plagarism Statement

I used [GeeksforGeeks](https://www.geeksforgeeks.org/pancake-sorting/#) to help explain how the sort worked, specifically how to get the max value out. I then used [Sort Visualizer] (https://www.sortvisualizer.com/pancakesort/) to be able to visualize the sort. No other sources or repositories were referenced. I did not reference the GeeksforGeeks code, instead I took these three lines to be the guidelines for how I structured the code.

````
Find index of the maximum element
Call flip(arr, mi)
Call flip(arr, curr_size – 1)
````

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
