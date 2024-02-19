for number in range(151):
    print(number)

for number in range(5,1001,5):
    print(number)

for number in range(100):
    if number % 10 == 0:
        print("Coding Dojo")
    elif number % 5 ==0:
        print("Coding")
    else:
        print(number)

sum_odd = 0
for number in range(1, 500001,2):
    sum_odd=sum_odd+number
print("the sum of odd number is",sum_odd)

for number in range(2018,-1,-4):
    print(number)

lowNum = 2
highNum = 9
mult = 3
for num in range(lowNum, highNum + 1):
    if num % mult == 0:
        print(num)