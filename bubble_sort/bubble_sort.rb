def bubble_sort(array)
  length = array.length - 1
  length.times do |i|
    was_swapped = false
    (0...(length - i)).each do |j|
      j1 = j + 1
      if array[j] > array[j1]
        array[j], array[j1] = array[j1], array[j]
        was_swapped = true
      end
    end
    break unless was_swapped
  end
  array
end

puts bubble_sort([4, 3, 78, 2, 0, 2])
