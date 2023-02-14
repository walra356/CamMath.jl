var documenterSearchIndex = {"docs":
[{"location":"#CamiMath.jl","page":"Home","title":"CamiMath.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Mathematics library with integer-overload protection","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Table-of-contents","page":"Home","title":"Table of contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Bernoulli-number","page":"Home","title":"Bernoulli number","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"bernoulliB(n::Integer; msg=true, arr=false)","category":"page"},{"location":"#CamiMath.bernoulliB-Tuple{Integer}","page":"Home","title":"CamiMath.bernoulliB","text":"bernoulliB(n::Integer; msg=true, arr=false)\n\nBernoulli numbers of index n are defined by the recurrence relation\n\n    B_n = - frac1n+1sum_k=0^n-1frac(n+1)k(n+1-k)B_k\n\nwith B_0=1 and B_1=-12. Including B_0 results in the even index  convention (B_2n+1=0 for n1).\n\nInteger overflow protection (IOP): for n > 35 the output is converted to  Rational{BigInt}. By default the IOP capture message is activated.\n\nExamples:\n\njulia> o = [bernoulliB(n) for n=0:5]; println(o)\nRational{Int64}[1//1, -1//2, 1//6, 0//1, -1//30, 0//1]\n\njulia> o = bernoulliB(5; arr=true); println(o)\nRational{Int64}[1//1, -1//2, 1//6, 0//1, -1//30, 0//1]\n\njulia> o = bernoulliB(big(5); arr=true); println(o)\nRational{BigInt}[1//1, -1//2, 1//6, 0//1, -1//30, 0//1]\n\njulia> bernoulliB(60)\nIOP capture: bernoulliB(60) converted to Rational{BigInt}\n-1215233140483755572040304994079820246041491//56786730\n\njulia> n = 60;\njulia> bernoulliB(n; msg=false) == bernoulliB(n; msg=false, arr=true)[end]             \ntrue\n\n\n\n\n\n","category":"method"},{"location":"#Factorial","page":"Home","title":"Factorial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"bigfactorial(n::T; msg=true) where {T<:Integer}","category":"page"},{"location":"#CamiMath.bigfactorial-Tuple{T} where T<:Integer","page":"Home","title":"CamiMath.bigfactorial","text":"bigfactorial(n::Int [; msg=true])\n\nThe product of all positive integers less than or equal to n,\n\nn=n(n-1)(n-2)1\n\nIn addition 0=1 by definition. For negative integers the factorial is zero. \n\nInteger overflow protection (IOP): for n > 20 the output is converted to  Rational{BigInt}. By default the IOP capture message is activated.\n\nExamples:\n\njulia> bigfactorial(20) == factorial(20)\ntrue\n\njulia> bigfactorial(21)\nIOP capture: bigfactorial(21) converted to BigInt\n51090942171709440000\n\njulia> bigfactorial(21; msg=false)\n51090942171709440000\n\njulia> factorial(21)\nERROR: OverflowError: 21 is too large to look up in the table; consider using \n`factorial(big(21))` instead\n\n\n\n\n\n","category":"method"},{"location":"#Faulhaber-polynomial","page":"Home","title":"Faulhaber polynomial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"faulhaber_polynom(p::Integer; msg=true)\nfaulhaber_polynomial(n::Integer, p::Int; msg=true)\nfaulhaber_summation(n::Integer, p::Int)","category":"page"},{"location":"#CamiMath.faulhaber_polynom-Tuple{Integer}","page":"Home","title":"CamiMath.faulhaber_polynom","text":"faulhaber_polynom(p::Integer; msg=true)\n\nVector representation of the coefficients of the faulhaber_polynomial  of degree p \n\n   c=c_0 c_p\n\nwhere c_0=0  c_j=frac1pbinompp-jB_p-j, with j 1 p. The B_p-j are bernoulliB in the  even index convention (but with  B_1=+frac12 rather than -frac12).\n\nInteger overflow protection (IOP): for p > 36 the output is converted  to Rational{BigInt}. By default the IOP capture message is activated.\n\nExample:\n\nfaulhaber_polynom(6)\n7-element Vector{Rational{Int64}}:\n  0//1\n  0//1\n -1//12\n  0//1\n  5//12\n  1//2\n  1//6\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.faulhaber_polynomial-Tuple{Integer, Int64}","page":"Home","title":"CamiMath.faulhaber_polynomial","text":"faulhaber_polynomial(n::Integer, p::Int; msg=true)\n\nFaulhaber polynomial of degree p \n\n    F(np)=sum_j=0^pc_jn^j\n\nwhere n is a positive integer and the coefficients are contained in the  vector c=c_0 c_p given by faulhaber_polynom.\n\nInteger overflow protection (IOP): on integer overflow the output is converted  to Rational{BigInt}. By default the IOP capture message is activated.\n\nExample:\n\njulia> faulhaber_polynomial(3, 6)\n276\n\njulia> faulhaber_polynomial(5, 30)\nIOP capture: faulhaber_polynomial(5, 30) autoconverted to Rational{BigInt}\n186552813930161650665\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.faulhaber_summation-Tuple{Integer, Int64}","page":"Home","title":"CamiMath.faulhaber_summation","text":"faulhaber_summation(n::Integer, p::Int; msg=true)\n\nSum of the p^th power of the first n natural numbers\n\n    sum_k=1^nk^p=H_n-p=F(np+1)\n\nwhere H_n-p is a harmonicNumber  of power -p and F(np)  a faulhaber_polynomial of power p.\n\nInteger overflow protection (IOP): on integer overflow the output is converted  to Rational{BigInt}. By default the IOP capture message is activated.\n\nExamples:\n\njulia> faulhaber_summation(3,5)\n276\n\njulia> faulhaber_summation(3,60)\nIOP capture: faulhaber_polynom autoconverted to Rational{BigInt}\n42391158276369125018901280178\n\n\n\n\n\n","category":"method"},{"location":"#HarmonicNumber","page":"Home","title":"HarmonicNumber","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"harmonicNumber(n::Integer; msg=true)\nharmonicNumber(n::Integer, p::Int; msg=true)","category":"page"},{"location":"#CamiMath.harmonicNumber-Tuple{Integer}","page":"Home","title":"CamiMath.harmonicNumber","text":"harmonicNumber(n::Integer [; msg=true])\n\nSum of the reciprocals of the first n natural numbers\n\n    H_n=sum_k=1^nfrac1k\n\nInteger overflow protection (IOP): for n > 46 the output is converted  to Rational{BigInt}. By default the IOP capture message is activated.\n\nExamples:\n\njulia> o = [harmonicNumber(n) for n=1:8]; println(o)\nRational{Int64}[1//1, 3//2, 11//6, 25//12, 137//60, 49//20, 363//140, 761//280]\n\njulia> harmonicNumber(46)\n5943339269060627227//1345655451257488800\n\njulia> harmonicNumber(47)\nIOP capture: harmonicNumber(47) converted to Rational{BigInt}\n280682601097106968469//63245806209101973600\n\njulia> harmonicNumber(12) == harmonicNumber(12, 1)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.harmonicNumber-Tuple{Integer, Int64}","page":"Home","title":"CamiMath.harmonicNumber","text":"harmonicNumber(n::Integer, p::Int [; msg=true])\n\nSum of the p^th power of reciprocals of the first n positive integers,\n\n    H_np=sum_k=1^nfrac1k^p\n\nInteger overflow protection (IOP): on integer overflow the output is converted  to Rational{BigInt}. By default the IOP capture message is activated.\n\nExamples:\n\njulia> harmonicNumber(46, 1)\n5943339269060627227//1345655451257488800\n\njulia> harmonicNumber(47, 1)\nIOP capture: harmonicNumber(47, 1) converted to Rational{BigInt}\n280682601097106968469//63245806209101973600\n\nharmonicNumber(12, -3) == faulhaber_summation(12, 3)\n  true\n\n\n\n\n\n","category":"method"},{"location":"#Pascal-triangle","page":"Home","title":"Pascal triangle","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pascal_triangle(n::Integer; msg=true)\npascal_next(row::Vector{T}) where {T<:Integer}","category":"page"},{"location":"#CamiMath.pascal_triangle-Tuple{Integer}","page":"Home","title":"CamiMath.pascal_triangle","text":"pascal_triangle(n::Integer; msg=true)\n\nRow n of binomial coefficients binomnk of the Pascal triangle. \n\nExample:\n\njulia> [pascal_triangle(row) for row=0:5]\n6-element Vector{Vector{Int64}}:\n [1]\n [1, 1]\n [1, 2, 1]\n [1, 3, 3, 1]\n [1, 4, 6, 4, 1]\n [1, 5, 10, 10, 5, 1]\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.pascal_next-Union{Tuple{Vector{T}}, Tuple{T}} where T<:Integer","page":"Home","title":"CamiMath.pascal_next","text":"pascal_next(row::Vector{T}) where {T<:Integer}\n\nNext row of binomial coefficients of the Pascal triangle. \n\nExample:\n\njulia> pascal_next([1, 4, 6, 4, 1])\n6-element Vector{Int64}:\n  1\n  5\n 10\n 10\n  5\n  1\n\n\n\n\n\n","category":"method"}]
}
