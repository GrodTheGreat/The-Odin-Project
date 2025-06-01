def stock_picker(prices)
  max_profit = 0
  best_days = [0, 1]

  prices.each_with_index do |price_i, index_i|
    prices_j = prices.slice(index_i, prices.length - 1)
    prices_j.each_with_index do |price_j, index_j|
      profit = price_j - price_i
      if profit > max_profit
        max_profit = profit
        best_days = [index_i, index_j + 1]
      end
    end
  end

  best_days
end

puts stock_picker([17, 3, 6, 9, 15, 8, 6, 1, 10])
