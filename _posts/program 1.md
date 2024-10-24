# Introduction to Python Programming
Author: Georgios Basinas  
Date: October 24, 2024  
Subject: Input Handling and Quadratic Equations


# Programming Lecture: Working with User Input and Solving Quadratic Equations

Today's lecture focused on two key programming concepts in Python 3: handling user input for calculations and solving quadratic equations. We learned how to create interactive programs that process user-provided numbers and make decisions based on mathematical conditions.

## Part 1: Basic Number Calculations

Our first task was to create a program that takes numeric input from users and performs calculations. Here's a simple example of how we implemented this:

```python
# Get user input for numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform calculations
sum_result = num1 + num2
product = num1 * num2
average = sum_result / 2

# Display results
print("Results:")
print("Sum:", sum_result)
print("Product:", product)
print("Average:", average)
```

This program demonstrates:
- Using `input()` to get user data
- Converting string input to floating-point numbers
- Performing basic arithmetic operations
- Simple print statements

## Part 2: Quadratic Equation Solver

The second part of the lecture covered a more complex problem: creating a program to solve quadratic equations in the form ax² + bx + c = 0. The program determines the number of real solutions based on the discriminant (b² - 4ac).

Here's our implementation with simple print statements:

```python
# Get coefficients from user
a = float(input("Enter coefficient a: "))
b = float(input("Enter coefficient b: "))
c = float(input("Enter coefficient c: "))

# Calculate discriminant
discriminant = b**2 - 4*a*c

# Determine number of solutions and calculate them
if discriminant > 0:
    # Two real solutions
    x1 = (-b + discriminant**0.5) / (2*a)
    x2 = (-b - discriminant**0.5) / (2*a)
    print("Two real solutions:")
    print("x1 =", x1)
    print("x2 =", x2)
elif discriminant == 0:
    # One real solution
    x = -b / (2*a)
    print("One real solution:")
    print("x =", x)
else:
    # No real solutions
    print("No real solutions - roots are complex")
```

### Key Concepts Learned:
1. **Discriminant Formula**: b² - 4ac
   - If discriminant > 0: Two real solutions
   - If discriminant = 0: One real solution
   - If discriminant < 0: No real solutions

2. **Programming Concepts**:
   - Using ** operator for powers (square and square root)
   - Conditional statements (if-elif-else)
   - Mathematical operations
   - Basic print statements
   - Simple user input

3. **Mathematical Tips**:
   - x**2 is used for squaring a number
   - x**0.5 is used for square root
   - Basic arithmetic operators: +, -, *, /

## Conclusion

This lecture provided practical experience in creating interactive Python programs that solve real mathematical problems. We learned how to handle user input, perform calculations, and make decisions based on mathematical conditions. The quadratic equation solver showed how we can implement mathematical formulas in Python while handling different cases through conditional statements.

### Practice Exercises
- Try modifying the first program to include additional calculations
- Add input validation to ensure users enter valid numbers
- Extend the quadratic equation solver to handle complex numbers when discriminant is negative
- Try implementing other mathematical formulas using basic operators
