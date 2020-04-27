# 4.26.2020
def two_sum(numbers, target)
    x = 0
    for i in numbers do
        j=x+1
        while j < numbers.length
            if numbers[x] + numbers[j] == target
                return [x,j]
            end
            j+=1
        end
        x+=1
    end
end