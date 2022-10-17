-- Haskell

quadratic = (\i a b c-> if ((i+(c/i) == b || i-(c/i) == b || -i+(c/i) == b || -i-(c/i) == b) && a == 1) then [abs(i),abs(c/i)] else (quadratic (i + 1) a b c))

main = do
  putStrLn "Quadratics"
  print(quadratic 0 1 7 12)
