"""Python functions for JavaScript Trials 1."""


def output_all_items(items):
    """Print each item in the given array."""
    
    for item in items:
        print(item)

def get_all_evens(nums):
    """Given an array of numbers, return an array of all even numbers."""

    evens = []
    for num in nums:
        if num % 2 == 0:
            evens.appen(num)
    
    return evens

def get_odd_indices(items):
    """Given an array, return all elements at odd numbered indices."""

    return items[1::2]


def print_as_numbered_list(items):
    """Given an array, return all elements at odd numbered indices."""

    i = 1
    for item in items:
        print(f"{i}. {item}")
        i += 1


def get_range(start, stop):
    """Return an array of numbers in a certain range."""

    nums = []
    while start < stop:
        nums.append(start)
        start += 1
    
    return nums


def censor_vowels(word):
    """Given a string, return a string where vowels are replaced with '*'."""

    for letter in word:
        if letter in 'aeiou':
            word = word.replace(letter, "*")

    return word


def snake_to_camel(string):
    """Given a string in snake case, return a string in upper camel case."""

    words = string.split("_")
    camel = words[0]
    for i in range(1, len(words)):
        camel += words[i].title()

    return camel


def longest_word_length(words):
    """Return the length of the longest word in the given array of words."""

    longest = len(words[0])
    for word in words:
        if longest < len(word):
            longest = len(word)
    
    return longest


def truncate(string):
    """Truncate repeating characters into one character."""

    result = []
    for letter in string:
        if len(result) == 0 or result[-1] != letter:
            result.append(letter)

    return ''.join(result)


def has_balanced_parens(string):
    """Return true if all parentheses in a given string are balanced."""

    parens = 0
    for letter in string:
        if letter == "(":
            parens += 1
        elif letter == ")":
            parens -= 1
        
    if parens != 0:
        return False
    
    return True


def compress(string):
    """Return a compressed version of the given string."""

    char_count = 0
    comp_string = ""
    curr_char = ""

    for char in string:
        if char == curr_char:
            char_count += 1
        else:
            if char_count > 1:
                comp_string += str(char_count)

            comp_string += char
            curr_char = char
            char_count = 0
        
    return comp_string
