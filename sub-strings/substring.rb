def substrings(string, dictionary)
  string = string.downcase
  words = string.split
  substrings = Hash.new(0)
  words.each do |word|
    dictionary.each do |item|
      item = item.downcase
      if word.include?(item)
        substrings[item] += 1
      end
    end
  end
  substrings
end

dictionary = ["below", "down", "go", "going", "horn", "how", "howdy", "it", "i", "low", "own", "part", "partner", "sit"]

puts substrings("below", dictionary)
puts substrings("Howdy partner, sit down! How's it going?", dictionary)
