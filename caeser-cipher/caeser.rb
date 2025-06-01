def caeser_cipher(string, shift)
  character_array = string.chars.map do |char|
    if ('a'..'z').include? char
      ((char.ord - 'a'.ord - shift) % 26 + 'a'.ord).chr
    elsif ('A'..'Z').include? char
      ((char.ord - 'A'.ord - shift) % 26 + 'A'.ord).chr
    else
      char
    end
  end
  character_array.join
end