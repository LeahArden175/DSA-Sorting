1. Understanding merge sort
    Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

        What is the resulting list that will be sorted after 3 recursive calls to mergesort?

        right [ 26, 45 ] left [ 1, 21 ]

        What is the resulting list that will be sorted after 16 recursive calls to mergesort?

        [1,  2,  9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]


        What are the first 2 lists to be merged?

        right [ 2, 9, 28, 29 ] left [ 1, 21, 26, 45 ]

        Which two lists would be merged on the 7th merge?

        right [ 2, 9, 28, 29 ] left [ 1, 21, 26, 45 ]


2. Understanding quicksort
    1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.

    The pivot could have been either 14 or 17

        The numbers before 14 and 17 are smaller and the numbers after are larger


    2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.

    When using the last item on the list as a pivot
    ?????

    When using the first item on the list as a pivot
    ?????