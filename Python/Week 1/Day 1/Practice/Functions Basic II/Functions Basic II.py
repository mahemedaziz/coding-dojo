def countdown(number):
    arr=[]
    for i in range(number,-1,-1):
        arr.append(i)
    return arr
print(countdown(5))

def First_Plus_Length(arr):
    return arr[0] + len(arr)
print(First_Plus_Length([1,5,8,9,6]))

def Greater_Than_Second(arr):
    result=[]
    for i in range((len(arr))):
        if arr[i]>arr[1]:
            result.append(arr[i])
    return result
print(Greater_Than_Second([2,5,9,7,5,6]))

def length_and_value(size, value):
    return [value] * size
print(length_and_value(4,4))
print(length_and_value(42,4))