var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = CamiMath","category":"page"},{"location":"#CamiMath.jl","page":"Home","title":"CamiMath.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Mathematics library with integer-overflow protection (IOP)","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Install","page":"Home","title":"Install","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package is installed using the Julia package manager","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Pkg; Pkg.add(\"CamiMath\")\n\njulia> using CamiMath","category":"page"},{"location":"#Table-of-contents","page":"Home","title":"Table of contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Singletons","page":"Home","title":"Singletons","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"fwd\nbwd\nreg\nrev","category":"page"},{"location":"#CamiMath.fwd","page":"Home","title":"CamiMath.fwd","text":"fwd\n\nSingleton type indicating forward sense\n\n\n\n\n\n","category":"type"},{"location":"#CamiMath.bwd","page":"Home","title":"CamiMath.bwd","text":"bwd\n\nSingleton type indicating backward sense\n\n\n\n\n\n","category":"type"},{"location":"#CamiMath.reg","page":"Home","title":"CamiMath.reg","text":"reg\n\nSingleton type indicating regular ordering\n\n\n\n\n\n","category":"type"},{"location":"#CamiMath.rev","page":"Home","title":"CamiMath.rev","text":"rev\n\nSingleton type indicating reverse ordering\n\n\n\n\n\n","category":"type"},{"location":"#Julia-Toolbox","page":"Home","title":"Julia Toolbox","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"isforward(sense::Type)\nisbackward(sense::Type)\nisregular(sense::Type)\nisreversed(sense::Type)\nType_IOP(n::Integer, nc::Integer, str=\"\")\nlog10_characteristic(x)\nlog10_mantissa(x)\ntexp(x::T, a::T, p::Int) where T<:Real","category":"page"},{"location":"#CamiMath.isforward-Tuple{Type}","page":"Home","title":"CamiMath.isforward","text":"function isforward(sense)\n\nBoolean status of sense, with options: fwd (forward) and bwd (backward).\n\nExample:\n\njulia> isforward(fwd)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.isbackward-Tuple{Type}","page":"Home","title":"CamiMath.isbackward","text":"function isbackward(sense)\n\nBoolean status of sense, with options: fwd (forward) and bwd (backward).\n\nExample:\n\njulia> isbackward(fwd)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.isregular-Tuple{Type}","page":"Home","title":"CamiMath.isregular","text":"function isregular(sense::Type)\n\nBoolean status of sense, with options: reg (regular) and rev (reversed).\n\nExample:\n\njulia> isregular(reg)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.isreversed-Tuple{Type}","page":"Home","title":"CamiMath.isreversed","text":"function isreversed(sense::Type)\n\nBoolean status of sense, with options: reg (regular) and rev (reversed).\n\nExample:\n\njulia> isreversed(rev)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.Type_IOP","page":"Home","title":"CamiMath.Type_IOP","text":"Type_IOP(n::Integer, nc::Integer [, a [; nam=\"\" [; msg=true]]])\n\nBigInt if n is a BigInt or n > nc, otherwise Int; a is an  auxiliary second variable.\n\nnam : function name\nmsg : integer-overflow protection (IOP) - warning on activation \n\nExamples:\n\njulia> Type_IOP(1, 1)\nInt64\n\njulia> Type_IOP(big(1), 1)\nBigInt\n\njulia> Type_IOP(2, 1)\nBigInt\n\njulia> Type_IOP(1, 1; nam=\"test\")\nInt64\n\njulia> Type_IOP(2, 1, 0; nam=\"test\")\n IOP capture at test(2, 0): output converted to BigInt\nBigInt\n\n\n\n\n\n","category":"function"},{"location":"#CamiMath.log10_characteristic-Tuple{Any}","page":"Home","title":"CamiMath.log10_characteristic","text":"log10_characteristic(x)\n\ncharacteristic power-of-10 of the number x\n\nExamples:\n\nlog10_characteristic.([3,30,300])\n3-element Vector{Int64}:\n 0\n 1\n 2\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.log10_mantissa-Tuple{Any}","page":"Home","title":"CamiMath.log10_mantissa","text":"log10_mantissa(x)\n\nlog10 mantissa of the number x\n\nExamples:\n\nlog10_mantissa.([3,30,300])\n3-element Vector{Float64}:\n 0.47712125471966244\n 0.4771212547196624\n 0.4771212547196626\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.texp-Union{Tuple{T}, Tuple{T, T, Int64}} where T<:Real","page":"Home","title":"CamiMath.texp","text":"texp(x::T, a::T, p::Int) where T <: Real\n\nTruncated exponential: Taylor expansion of exp(x) about x = a  up to order p,\n\n    mathsftexp(xap) = 1+(x-a)+frac12(x-a)^2++frac1p(x-a)^p\n\nExamples:\n\njulia> texp(1.0, 0.0, 5)\n2.7166666666666663\n\njulia> texp(1, 0, 5)\n163//60\n\n\n\n\n\n","category":"method"},{"location":"#Bernoulli-number","page":"Home","title":"Bernoulli number","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"bernoulliB(n::Integer; arr=false, msg=true)","category":"page"},{"location":"#CamiMath.bernoulliB-Tuple{Integer}","page":"Home","title":"CamiMath.bernoulliB","text":"bernoulliB(n::Integer [; arr=false [, msg=true]])\n\nBernoulli numbers of index n are defined by the recurrence relation\n\n    B_n = - frac1n+1sum_k=0^n-1frac(n+1)k(n+1-k)B_k\n\nwith B_0=1 and B_1=-12. Including B_0 results in the even index  convention (B_2n+1=0 for n1).\n\narr : output in array format\nmsg : integer-overflow protection (IOP) - warning on activation \n\nExamples:\n\njulia> o = [bernoulliB(n) for n=0:5]; println(o)\nRational{Int64}[1//1, -1//2, 1//6, 0//1, -1//30, 0//1]\n\njulia> o = bernoulliB(5; arr=true); println(o)\nRational{Int64}[1//1, -1//2, 1//6, 0//1, -1//30, 0//1]\n\njulia> o = bernoulliB(big(5); arr=true); println(o)\nRational{BigInt}[1//1, -1//2, 1//6, 0//1, -1//30, 0//1]\n\njulia> bernoulliB(60)\nIOP capture: bernoulliB(60) converted to Rational{BigInt}\n-1215233140483755572040304994079820246041491//56786730\n\njulia> n = 60;\njulia> bernoulliB(n; msg=false) == bernoulliB(n; msg=false, arr=true)[end]             \ntrue\n\n\n\n\n\n","category":"method"},{"location":"#Divisor","page":"Home","title":"Divisor","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"normalize_rationals(v::Vector{Rational{T}}) where T<:Integer\ndivisor(v::Vector{Rational{T}}) where T<:Integer\nnumerators(v::Vector{Rational{T}}) where T<:Integer","category":"page"},{"location":"#CamiMath.normalize_rationals-Union{Tuple{Array{Rational{T}, 1}}, Tuple{T}} where T<:Integer","page":"Home","title":"CamiMath.normalize_rationals","text":"normalize_rationals(v::Vector{Rational{T}}) where T<:Integer\n\nNumerators separated from divisor\n\nExample:\n\njulia> normalize_rationals([1//1, 1//2, 1//3])\n([6, 3, 2], 6)\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.divisor-Union{Tuple{Array{Rational{T}, 1}}, Tuple{T}} where T<:Integer","page":"Home","title":"CamiMath.divisor","text":"divisor(v::Vector{Rational{T}}) where T<:Integer\n\nGreatest common denominator of the set of rational numbers v\n\nExample:\n\njulia> divisor([1//1, 1//2, 1//3])\n6\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.numerators-Union{Tuple{Array{Rational{T}, 1}}, Tuple{T}} where T<:Integer","page":"Home","title":"CamiMath.numerators","text":"numerators(v::Vector{Rational{T}}) where T<:Integer\n\nNumerators for the standard devisor of the set of rational numbers v\n\nExample:\n\njulia> numerators([1//1, 1//2, 1//3])\n3-element Vector{Int64}:\n 6\n 3\n 2\n\n\n\n\n\n","category":"method"},{"location":"#Factorial","page":"Home","title":"Factorial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"bigfactorial(n::Integer; msg=true)","category":"page"},{"location":"#CamiMath.bigfactorial-Tuple{Integer}","page":"Home","title":"CamiMath.bigfactorial","text":"bigfactorial(n::Int [; msg=true])\n\nThe product of all positive integers less than or equal to n,\n\nn=n(n-1)(n-2)1\n\nIn addition 0=1 by definition. For negative integers the factorial is zero. \n\nmsg : integer-overflow protection (IOP) - warning on activation  (for n > 20) \n\nExamples:\n\njulia> bigfactorial(20) == factorial(20)\ntrue\n\njulia> bigfactorial(21)\nIOP capture: bigfactorial(21) converted to BigInt\n51090942171709440000\n\njulia> bigfactorial(21; msg=false)\n51090942171709440000\n\njulia> factorial(21)\nERROR: OverflowError: 21 is too large to look up in the table; consider using \n`factorial(big(21))` instead\n\n\n\n\n\n","category":"method"},{"location":"#Faulhaber-polynomial","page":"Home","title":"Faulhaber polynomial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"faulhaber_polynomial(n::Integer, p::Int; msg=true)\nfaulhaber_polynom(p::Integer; msg=true)\nfaulhaber_summation(n::Integer, p::Int)","category":"page"},{"location":"#CamiMath.faulhaber_polynomial-Tuple{Integer, Int64}","page":"Home","title":"CamiMath.faulhaber_polynomial","text":"faulhaber_polynomial(n::Integer, p::Int [; msg=true])\n\nFaulhaber polynomial of degree p \n\n    F(np)=sum_j=0^pc_jn^j\n\nwhere n is a positive integer and the coefficients are contained in the  vector c=c_0 c_p given by faulhaber_polynom.\n\nmsg : integer-overflow protection (IOP) - warning on activation\n\nExamples:\n\njulia> faulhaber_polynomial(3, 6)\n276\n\njulia> faulhaber_polynomial(5, 30)\nIOP capture: faulhaber_polynomial(5, 30) autoconverted to Rational{BigInt}\n186552813930161650665\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.faulhaber_polynom-Tuple{Integer}","page":"Home","title":"CamiMath.faulhaber_polynom","text":"faulhaber_polynom(p::Integer [; msg=true])\n\nVector representation of the coefficients of the faulhaber_polynomial  of degree p, \n\n   c=c_0 c_p\n\nwhere c_0=0  c_j=frac1pbinompp-jB_p-j, with j 1 p. The B_p-j are bernoulliB in the  even index convention (but with  B_1=+frac12 rather than -frac12).\n\nmsg : integer-overflow protection (IOP) - warning on activation \n\n(for p > 36)\n\nExample:\n\nfaulhaber_polynom(6)\n7-element Vector{Rational{Int64}}:\n  0//1\n  0//1\n -1//12\n  0//1\n  5//12\n  1//2\n  1//6\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.faulhaber_summation-Tuple{Integer, Int64}","page":"Home","title":"CamiMath.faulhaber_summation","text":"faulhaber_summation(n::Integer, p::Int [; msg=true])\n\nSum of the p^th power of the first n natural numbers\n\n    sum_k=1^nk^p=H_n-p=F(np+1)\n\nwhere H_n-p is a harmonicNumber  of power -p and F(np)  a faulhaber_polynomial of power p.\n\nmsg : integer-overflow protection (IOP) - warning on activation\n\nExamples:\n\njulia> faulhaber_summation(3,5)\n276\n\njulia> faulhaber_summation(3,60)\nIOP capture: faulhaber_polynom autoconverted to Rational{BigInt}\n42391158276369125018901280178\n\n\n\n\n\n","category":"method"},{"location":"#HarmonicNumber","page":"Home","title":"HarmonicNumber","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"harmonicNumber(n::Integer; arr=false, msg=true)\nharmonicNumber(n::Integer, p::Int; arr=false, msg=true)","category":"page"},{"location":"#CamiMath.harmonicNumber-Tuple{Integer}","page":"Home","title":"CamiMath.harmonicNumber","text":"harmonicNumber(n::Integer [, p=1 [; arr=false [, msg=true]]])\n\nSum of the p^th power of reciprocals of the first n positive integers,\n\n    H_np=sum_k=1^nfrac1k^p\n\narr : output in array format\nmsg : integer-overflow protection (IOP) - warning on activation \n\nExamples:\n\njulia> o = [harmonicNumber(n) for n=1:8]; println(o)\nRational{Int64}[1//1, 3//2, 11//6, 25//12, 137//60, 49//20, 363//140, 761//280]\n\njulia> harmonicNumber(8; arr=true)\n(1//1, 3//2, 11//6, 25//12, 137//60, 49//20, 363//140, 761//280)\n\njulia> harmonicNumber(42)\n12309312989335019//2844937529085600\n\njulia> harmonicNumber(43)\nIOP capture: harmonicNumber(43, 1) converted to Rational{BigInt}\n532145396070491417//122332313750680800\n\njulia> harmonicNumber(12) == harmonicNumber(12, 1)\ntrue\n\njulia> harmonicNumber(12, -3) == faulhaber_summation(12, 3)\ntrue\n\njulia> o = [harmonicNumber(i, 5) for i=1:4]; println(o)\nRational{Int64}[1//1, 33//32, 8051//7776, 257875//248832]\n\njulia> o = harmonicNumber(4, 5; arr=true); println(o)\n(1//1, 33//32, 8051//7776, 257875//248832)\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.harmonicNumber-Tuple{Integer, Int64}","page":"Home","title":"CamiMath.harmonicNumber","text":"harmonicNumber(n::Integer [, p=1 [; arr=false [, msg=true]]])\n\nSum of the p^th power of reciprocals of the first n positive integers,\n\n    H_np=sum_k=1^nfrac1k^p\n\narr : output in array format\nmsg : integer-overflow protection (IOP) - warning on activation \n\nExamples:\n\njulia> o = [harmonicNumber(n) for n=1:8]; println(o)\nRational{Int64}[1//1, 3//2, 11//6, 25//12, 137//60, 49//20, 363//140, 761//280]\n\njulia> harmonicNumber(8; arr=true)\n(1//1, 3//2, 11//6, 25//12, 137//60, 49//20, 363//140, 761//280)\n\njulia> harmonicNumber(42)\n12309312989335019//2844937529085600\n\njulia> harmonicNumber(43)\nIOP capture: harmonicNumber(43, 1) converted to Rational{BigInt}\n532145396070491417//122332313750680800\n\njulia> harmonicNumber(12) == harmonicNumber(12, 1)\ntrue\n\njulia> harmonicNumber(12, -3) == faulhaber_summation(12, 3)\ntrue\n\njulia> o = [harmonicNumber(i, 5) for i=1:4]; println(o)\nRational{Int64}[1//1, 33//32, 8051//7776, 257875//248832]\n\njulia> o = harmonicNumber(4, 5; arr=true); println(o)\n(1//1, 33//32, 8051//7776, 257875//248832)\n\n\n\n\n\n","category":"method"},{"location":"#Fibonacci-number","page":"Home","title":"Fibonacci number","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"fibonacci(n::Integer; arr=false, msg=true)","category":"page"},{"location":"#CamiMath.fibonacci-Tuple{Integer}","page":"Home","title":"CamiMath.fibonacci","text":"fibonacci(n::Integer [; arr=false [, msg=true]])\n\nThe sequence of integers,  F_0 F_nmax, in which each element is  the sum of the two preceding ones, \n\n    F_n = F_n-1+F_n-2\n\nwith F_1=1 and F_0=0. \n\narr : output full Pascal triangle\nmsg : integer-overflow protection (IOP) - warning on activation\n\nExamples:\n\njulia> fibonacci(92)\n7540113804746346429\n\njulia> fibonacci(93)\nIOP capture: fibonaci(93) converted to BigInt\n12200160415121876738\n\njulia> o = fibonacci(10; arr=true); println(o)\n[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]\n\n\n\n\n\n","category":"method"},{"location":"#Integer-partitioning","page":"Home","title":"Integer partitioning","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"canonical_partitions(n::Int, m=0; header=true, reverse=true)\ninteger_partitions(n::Int, m=0; transpose=false, count=false)","category":"page"},{"location":"#CamiMath.canonical_partitions","page":"Home","title":"CamiMath.canonical_partitions","text":"canonical_partitions(n::Int, [m=0 , [sense=rev [; header=true]]])\n\nCanonical partition of n in parts of maximum size m (m = 0 for any size)\n\nsense : regular (reg) or reverse (rev)     header : unit partition included in output\n\nExamples:\n\njulia> canonical_partitions(6, 0, reg; header=true)\n6-element Vector{Vector{Int64}}:\n [6]\n [5, 1]\n [4, 2]\n [3, 3]\n [2, 2, 2]\n [1, 1, 1, 1, 1, 1]\n\njulia> canonical_partitions(6; header=true)\n6-element Vector{Vector{Int64}}:\n [1, 1, 1, 1, 1, 1]\n [2, 2, 2]\n [3, 3]\n [4, 2]\n [5, 1]\n [6]\n\njulia> canonical_partitions(6)\n6-element Vector{Vector{Int64}}:\n [1, 1, 1, 1, 1, 1]\n [2, 2, 2]\n [3, 3]\n [4, 2]\n [5, 1]\n [6]\n\njulia> o = canonical_partitions(9, 2); println(o)\n[2, 2, 2, 2, 1]\n\njulia> o = canonical_partitions(9, 3); println(o)\n[3, 3, 3]\n\n\n\n\n\n","category":"function"},{"location":"#CamiMath.integer_partitions","page":"Home","title":"CamiMath.integer_partitions","text":"integer_partitions(n [,m [; transpose=false [, count=false]]])\n\ndefault                      : The integer partitions of n\n\ncount                        : The number of integer partitions of n\n\ntranspose = false (m > 0): partitions restricted to maximum part m             = true  (m > 0): partitions restricted to maximum length m`\n\ndefinitions:\n\nThe integer partition of the positive integer n is a nonincreasing sequence of positive integers p1, p2,... pk whose sum is n. The elements of the sequence are called the parts of the partition.\n\nExamples:\n\njulia> integer_partitions(7)\n15-element Vector{Vector{Int64}}:\n [1, 1, 1, 1, 1, 1, 1]\n [2, 2, 2, 1]\n [2, 2, 1, 1, 1]\n [2, 1, 1, 1, 1, 1]\n [3, 3, 1]\n [3, 2, 2]\n [3, 2, 1, 1]\n [3, 1, 1, 1, 1]\n [4, 3]\n [4, 2, 1]\n [4, 1, 1, 1]\n [5, 2]\n [5, 1, 1]\n [6, 1]\n [7]\n\njulia> integer_partitions(7; count=true)\n15\n\njulia> integer_partitions(7, 4; count=true)\n3\n\njulia> integer_partitions(7, 4)\n3-element Vector{Vector{Int64}}:\n [4, 3]\n [4, 2, 1]\n [4, 1, 1, 1]\n\njulia> integer_partitions(7, 4; transpose=true)\n3-element Vector{Vector{Int64}}:\n [2, 2, 2, 1]\n [3, 2, 1, 1]\n [4, 1, 1, 1]\n\n\n\n\n\n","category":"function"},{"location":"#Lagrange-polynomial","page":"Home","title":"Lagrange polynomial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"lagrange_polynom(f::Vector{T}, start::Int, stop::Int, sense=fwd) where T<:Real","category":"page"},{"location":"#CamiMath.lagrange_polynom-Union{Tuple{T}, Tuple{Vector{T}, Int64, Int64}, Tuple{Vector{T}, Int64, Int64, Any}} where T<:Real","page":"Home","title":"CamiMath.lagrange_polynom","text":"lagrange_polynom(f::Vector{T}, start::Int, stop::Int [, sense=fwd]) where T<:Real\nlagrange_polynom(f::Vector{T}, itr::UnitRange [, sense=fwd]) where T<:Real\n\nThe coefficients of the polynomial of degree d =stop-start running  through d+1 subsequent points of the tabulated regular function fn.  For sense = `fwd these are the points fnn+d, for sense = bwd  the points fn-kn. The corresponding polynomial is most accurate near fn. \n\nExamples:\n\njulia> a = [0.0, 1.0, 4.0, 9.0, 16.0, 25.0];\n\njulia> polynom = lagrange_polynom(a, 1, 4, fwd); println(polynom)\n[0.0, 0.0, 1.0, 0.0]\n\njulia> f(x) = polynomial(polynom, x); \n\njulia> f(0.0), f(0.5), f(1.0), f(2.0), f(3.0)\n(0.0, 0.25, 1.0, 4.0, 9.0)\n\njulia> polynom = lagrange_polynom(a, 1:4, bwd); println(polynom)\n[9.0, 6.0, 1.0, -4.440892098500626e-16]\n\njulia> f(x) = polynomial(polynom, x); \n\njulia> f(-3.0), f(-2.5), f(-2.0), f(-1.0), f(0.0)\n(1.199040866595169e-14, 0.25000000000000694, 1.0000000000000036, 4.0, 9.0)\n\n\n\n\n\n","category":"method"},{"location":"#Laguerre-polynomial","page":"Home","title":"Laguerre polynomial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"laguerreL(n::Integer, x::T; deriv=0, msg=true) where T<:Real\ngeneralized_laguerreL(n::Integer, α, x::T; deriv=0, msg=true) where T<:Real\nlaguerre_polynom(p::Integer; msg=true)\ngeneralized_laguerre_polynom(n::Integer, α=0; msg=true)","category":"page"},{"location":"#CamiMath.laguerreL-Union{Tuple{T}, Tuple{Integer, T}} where T<:Real","page":"Home","title":"CamiMath.laguerreL","text":"laguerreL(n::Integer, x::T [; deriv=0 [, msg=true]]) where T<:Real\n\nLaguerre polynomal of degree n,\n\n    L_n(x)\n    = frac1ne^xfracd^ndx^n(e^-xx^n)\n    = sum_k=0^n(-1)^kbinomnn-kfracx^kk\n    = sum_k=0^nc_k(n)x^k\n\nwhere the c_k(n) are Laguerre coefficients of laguerre_polynom.\n\nExample:\n\njulia> polynom = laguerre_polynom(8); println(polynom)\n(1//1, -8//1, 14//1, -28//3, 35//12, -7//15, 7//180, -1//630, 1//40320)\n\njulia> polynomial(polynom, 5)\n18029//8064\n\njulia> laguerreL(8, 5)\n18029//8064\n\njulia> (xmin, Δx, xmax) = (0, 0.1, 11);\njulia> n = 8;\njulia> L = [laguerreL(n, x) for x=xmin:Δx:xmax];\njulia> f = Float64.(L);\nplot_function(f, xmin, Δx, xmax; title=\"laguerre polynomial (of degree $n)\")\n\nThe plot is made using CairomMakie. NB.: plot_function is not included in the CamiXon package. (Image: Image)\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.generalized_laguerreL-Union{Tuple{T}, Tuple{Integer, Any, T}} where T<:Real","page":"Home","title":"CamiMath.generalized_laguerreL","text":"generalized_laguerreL(n::Integer, α, x::T [; deriv=0 [, msg=true]]) where T<:Real\n\nGeneralized Laguerre polynomal of degree n for parameter α,\n\n    L_n^α(x)\n    = frac1ne^xx^-αfracd^ndx^n(e^-xx^n+α)\n    = sum_k=0^n(-1)^kbinomn+αn-kfracx^kk\n    = sum_k=0^nc_k(nα)x^k\n\nwhere the c_k(nα) are the generalized Laguerre coefficients of generalized_laguerre_polynom.\n\nExample:\n\njulia> polynom = generalized_laguerre_polynom(5, 3); println(polynom)\nRational{Int64}[56//1, -70//1, 28//1, -14//3, 1//3, -1//120]\n\njulia> polynomial(polynom, 10.0)\n-10.666666666667311\n\njulia> generalized_laguerreL(5, 3, 10.0)\n-10.666666666667311\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.laguerre_polynom-Tuple{Integer}","page":"Home","title":"CamiMath.laguerre_polynom","text":"laguerre_polynom(n::Integer [; msg=true])\n\nThe coefficients of laguerreL for degree n, \n\n    v(n)=c_0 c_1 cdots c_n\n\nwhere\n\n    c_k(n) = fracGamma(n+1)Gamma(k+1)frac(-1)^k(n-k)frac1k\n\nwith k=01n.\n\nmsg : integer-overflow protection (IOP) - warning on activation \n\nExample:\n\njulia> laguerre_polynom(7)\n(1//1, -7//1, 21//2, -35//6, 35//24, -7//40, 7//720, -1//5040)\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.generalized_laguerre_polynom","page":"Home","title":"CamiMath.generalized_laguerre_polynom","text":"generalized_laguerre_polynom(n::Int [, α=0 [; msg=true]])\n\nThe coefficients of generalized_laguerreL for degree n and parameter α, \n\n    v(n α)=c_0 c_1 cdots c_n\n\nwhere\n\n    c_k(n α) = fracGamma(α+n+1)Gamma(α+k+1)\n    frac(-1)^k(n-k)frac1k\n\nwith k=01n. \n\nmsg : integer-overflow protection (IOP) - warning on activation \n\nExample:\n\njulia> o =  generalized_laguerre_polynom(6,3); println(o)\nRational{Int64}[84//1, -126//1, 63//1, -14//1, 3//2, -3//40, 1//720]\n\njulia> o =  generalized_laguerre_polynom(6,3.0); println(o)\n[84.0, -126.0, 63.0, -14.0, 1.5, -0.075, 0.001388888888888889]\n\n\n\n\n\n","category":"function"},{"location":"#Pascal-triangle","page":"Home","title":"Pascal triangle","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pascal_triangle(n::Integer; arr=false, msg=true)\npascal_next(a)","category":"page"},{"location":"#CamiMath.pascal_triangle-Tuple{Integer}","page":"Home","title":"CamiMath.pascal_triangle","text":"pascal_triangle(n::Integer [; arr=false [, msg=true]])\n\nRow n of Pascal triangle, r_n = binomn1cdots binomnn\n\narr : output full Pascal triangle\nmsg : integer-overflow protection (IOP) - warning on activation \n\n(for n > 10000)\n\nExamples:\n\njulia> [pascal_triangle(n) for n=0:5]\n6-element Vector{Vector{Int64}}:\n [1]\n [1, 1]\n [1, 2, 1]\n [1, 3, 3, 1]\n [1, 4, 6, 4, 1]\n [1, 5, 10, 10, 5, 1]\n\njulia> pascal_triangle(5; arr=true)\n5-element Vector{Vector{Int64}}:\n [1, 1]\n [1, 2, 1]\n [1, 3, 3, 1]\n [1, 4, 6, 4, 1]\n [1, 5, 10, 10, 5, 1]\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.pascal_next-Tuple{Any}","page":"Home","title":"CamiMath.pascal_next","text":"pascal_next(row)\n\nNext row of binomial coefficients of the Pascal triangle. \n\nExample:\n\njulia> pascal_next([1, 4, 6, 4, 1])\n6-element Vector{Int64}:\n  1\n  5\n 10\n 10\n  5\n  1\n\n\n\n\n\n","category":"method"},{"location":"#Permutations","page":"Home","title":"Permutations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"permutations_unique_count(p::Vector{Vector{Int}}, i::Int)","category":"page"},{"location":"#CamiMath.permutations_unique_count-Tuple{Vector{Vector{Int64}}, Int64}","page":"Home","title":"CamiMath.permutations_unique_count","text":"permutations_unique_count(p::Vector{Vector{Integer}}, i::Int)\n\nNumber of unique permutations of the subarray pi.\n\nExample:\n\np = [[1,2,3],[2,3,1,4,3]]\npermutations_unique_count(p,2)\n 60\n\n\n\n\n\n","category":"method"},{"location":"#Pochhammer-product","page":"Home","title":"Pochhammer product","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"pochhammer(x::T, p::Int) where T<:Real","category":"page"},{"location":"#CamiMath.pochhammer-Union{Tuple{T}, Tuple{T, Int64}} where T<:Real","page":"Home","title":"CamiMath.pochhammer","text":"pochhammer(x::T, p::Int) where T<:Real\n\nPochhammer symbol (x)_p for non-negative integer p,\n\n(x)_p=begincases\n1  p=0\nx(x+1)(x+2)(x+p-1)  p0\nendcases\n\nNote that (x)_p=0 for x=0-1 -(p-1)\n\nExamples:\n\njulia> x = [-4,-3,-2,-1, 0, 1, 2 , 3, 4];\n\njulia> pochhammer.(x, 5) == [0, 0, 0, 0, 0, 120, 720, 2520, 6720]\ntrue\n\njulia> pochhammer.(x, 0) == [1, 1, 1, 1, 1, 1, 1, 1, 1]\ntrue\n\njulia> o = [pochhammer.([x for x=0:-1:-p],p) for p=0:5]\n6-element Vector{Vector{Int64}}:\n [1]\n [0, -1]\n [0, 0, 2]\n [0, 0, 0, -6]        \n [0, 0, 0, 0, 24]     \n [0, 0, 0, 0, 0, -120]\n\njulia>  o = [pochhammer.([x for x=0:p],p) for p=0:5]\n6-element Vector{Vector{Int64}}:\n [1]\n [0, 1]\n [0, 2, 6]\n [0, 6, 24, 60]\n [0, 24, 120, 360, 840]\n [0, 120, 720, 2520, 6720, 15120]\n\njulia> x = Rational{BigInt}(-1, 50);\n\njulia> pochhammer(x, 20)\n-21605762356630090481082546653745369902321614221999//9536743164062500000000000000000000\n\n\n\n\n\n","category":"method"},{"location":"#Polynomials","page":"Home","title":"Polynomials","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Polynomials can be regarded as the elements of a vector space. As an example  we consider the set of all Real polynomials of degree d,","category":"page"},{"location":"","page":"Home","title":"Home","text":"P_α(x) = α_0 + α_1 x +  + α_d x^d","category":"page"},{"location":"","page":"Home","title":"Home","text":"These are maps P_αmathbbmathbbRrightarrowmathbbR that  satisfy the group operation 'addition of polynomials' because the sum of two  polynomials of degree d is again a polynomial of degree d,","category":"page"},{"location":"","page":"Home","title":"Home","text":"(P_α + P_β)(x)  (α_0 + β_0)+(α_1 + β_1)x +  + (α_d + β_d) x^d = P_α(x) + P_β(x)","category":"page"},{"location":"","page":"Home","title":"Home","text":"and remains a polynomial of degree d under 'scalar multiplication',","category":"page"},{"location":"","page":"Home","title":"Home","text":"(λ P_α)(x)  P_lambdaα(x)=lambdaα_0+lambdaα_1 x +  + lambdaα_d x^d = λ P_α(x)","category":"page"},{"location":"","page":"Home","title":"Home","text":"The 'zero element' of the vector space is the polynomial P_α(x)=0 and the 'inverse  element' of the element P_α(x) is the polynomial -P_α(x). Also the 'associative'  and 'distributive' properties are easily verified. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Hence, the set of all Real polynomials of degree d defines  a vector space (of  dimension d + 1) over the field mathbbR and the polynomials  1xx^2cdots x^d represent a basis. This vector space is denoted by  mathcalP_d. The coefficients α_0  α_d, represent the coordinates of the vector P_α with respect to this basis.","category":"page"},{"location":"","page":"Home","title":"Home","text":"In CamiMath we define a polynomial by specifying the coordinate vector polynom.","category":"page"},{"location":"","page":"Home","title":"Home","text":"polynom\npolynomial(polynom, x::T; deriv=0) where T<:Real\npolynom_power(polynom, power::Int)\npolynom_product(polynom1, polynom2)\npolynom_product_expansion(polynom1, polynom2, p::Int)","category":"page"},{"location":"#CamiMath.polynom","page":"Home","title":"CamiMath.polynom","text":"polynom\n\nCoordinate vector used to define a polynomial.\n\n\n\n\n\n","category":"type"},{"location":"#CamiMath.polynomial-Union{Tuple{T}, Tuple{Any, T}} where T<:Real","page":"Home","title":"CamiMath.polynomial","text":"polynomial(polynom, x::T [; deriv=0]) where T<:Real\n\nPolynomial of degree d,\n\n    P(x)=c_0 + c_1 x +  + c_d x^d\n\nwhere the coefficients polynom = (c_0 c_d) define the vector  representation of the polynomial in a vector space of dimension d+1.\n\nExamples:\n\njulia> polynom = (1, 1, 1, 1, 1);\n           \njulia> P(x) = polynomial(polynom,x);\n\njulia> P(1)\n5\n\njulia> polynomial(polynom, 1; deriv=1)     # P′(1)\n10\n\njulia> polynomial(polynom, 2; deriv=2)     # P″(1)\n20\n\njulia> polynomial(polynom,x; deriv=-1)   # primitive (zero integration constant)\n137 // 60\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.polynom_power-Tuple{Any, Int64}","page":"Home","title":"CamiMath.polynom_power","text":"polynom_power(polynom, p)\n\nThe polynom of a polynomial of degree d raised to the power p, which define a polynomial in a vector space of dimension p d + 1.\n\nExamples:\n\njulia> polynom = (1,1,1)    # coordinates of polynomial vector of degree d = 2\n(1, 1, 1)\n\njulia> polynom = (1,1,1);\n\njulia> polynom_power(polynom, 3)\n7-element Vector{Int64}:\n 1\n 3\n 6\n 7\n 6\n 3\n 1\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.polynom_product-Tuple{Any, Any}","page":"Home","title":"CamiMath.polynom_product","text":"polynom_product(polynom1, polynom2)\n\nThe coefficients of the product of two polynomials, a = polynom1 and  b = polynom2 of degree m and n, which represents a polynomial  in a vector space of dimension d=m+n+1,\n\n    P(x)=a_0b_0 + (a_0b_1 + b_0a_1)x +  + a_n b_m x^n+m\n\nExamples:\n\njulia> polynom_product((1, 1), (1, -1, 2))\n4-element Vector{Int64}:\n 1\n 0\n 1\n 2\n\njulia> polynom_product((1, 1), (1, -1.0, 2))\n4-element Vector{Real}:\n 1\n 0.0\n 1.0\n 2  \n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.polynom_product_expansion-Tuple{Any, Any, Int64}","page":"Home","title":"CamiMath.polynom_product_expansion","text":"polynom_product_expansion(polynom1, polynom2, p::Int)\n\nThe coefficients of the product of two polynomials, a = polynom1  (of degree n) and b = polynom2 (of degree m), truncated at the  order p, which represents a polynomial in a vector space of  dimension d=p+1\n\nExamples:\n\njulia> a = (1,-1,1);\n\njulia> b = (1,1,-1,1,1,1);\n\njulia> o = polynom_product(a, b); println(o)\n[1, 0, -1, 3, -1, 1, 0, 1]\n \njulia> o = polynom_product_expansion(a, b, 4); println(o)\n[1, 0, -1, 3, -1] \n\n\n\n\n\n","category":"method"},{"location":"#Vector-coupling","page":"Home","title":"Vector coupling","text":"","category":"section"},{"location":"#Triangle-relations","page":"Home","title":"Triangle relations","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"istriangle(a::Real, b::Real, c::Real)\ntriangle_coefficient(a::Real, b::Real, c::Real)","category":"page"},{"location":"#CamiMath.istriangle-Tuple{Real, Real, Real}","page":"Home","title":"CamiMath.istriangle","text":"istriangle(a::Real, b::Real, c::Real)\n\nTriangle condition for a triangle of sides a, b and c.\n\nExample:\n\njulia> istriangle(3, 4, 5)\ntrue\n\njulia> istriangle(1//2, 1, 1.5)\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.triangle_coefficient-Tuple{Real, Real, Real}","page":"Home","title":"CamiMath.triangle_coefficient","text":"triangle_coefficient(a::Real, b::Real, c::Real)\n\nTriangle coefficient for a triangle of sides a, b and c,\n\n    Delta(abc)equivfrac(a+b-c)(b+c-a)(c+a-b)(a+b+c+1)\n\nTriangle condition satisfied for Delta  0\n\nExamples:\n\njulia> triangle_coefficient(3, 4, 5)\n1//180180\n\njulia> triangle_coefficient(1//2, 1, 1.5)\n1//12\n\n\n\n\n\n","category":"method"},{"location":"#Vector-coupling-coefficients","page":"Home","title":"Vector-coupling coefficients","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"threeJsymbol(j1::Real, m1::Real, j2::Real, m2::Real, j3::Real, m3::Real; msg=false)\nCGC(j1::Real, m1::Real, j2::Real, m2::Real, J::Real, M::Real; msg=false)","category":"page"},{"location":"#CamiMath.threeJsymbol-NTuple{6, Real}","page":"Home","title":"CamiMath.threeJsymbol","text":"threeJsymbol(j1::Real, m1::Real, j2::Real, m2::Real, j3::Real, m3::Real [; msg=true])\n\nWigner 3j symbol. This is a vector coupling coefficient with optimized symmetry properties. The 3j symbols are zero unless Δ(j_1j_2j_3)0 (triangle inequality holds) and m_1+m_2+m_3=0. The implementation is based on the Racah formula:\n\nleft(beginarrayccc\nj_1  j_2  j_3\nm_1  m_2  m_3\nendarrayright)=\n(-1)^j_1-j_2-m_3sqrtDelta(j_1j_2J)times\nsqrtleft(j_1+m_1right)\nleft(j_1-m_1right)\nleft(j_2+m_2right)\nleft(j_2-m_2right)\nleft(j_3+m_3right)\nleft(j_3-m_3right)\ntimessum_tfrac(-)^tt(j_3-j_2+t+m_1)\n(j_3-j_1+t-m_2)\n(j_1+j_2-j_3-t)(j_1-t-m_1)(j_2-t+m_2)\n\nExample:\n\njulia> o = threeJsymbol(3, 0, 4, -1, 5, 1); println(\" = $o\")\n-√(361/30030) = -0.1096417439724123565166029917781360897459044055433631161836138910409772907333476\n\njulia> threeJsymbol(3, 0, 4, -1, 5, 1; msg=false)\n-0.1096417439724123565166029917781360897459044055433631161836138910409772907333476\n\njulia> threeJsymbol(0, 0, 0, 0, 0, 0; msg=false)\n1.0\n\n\n\n\n\n","category":"method"},{"location":"#CamiMath.CGC-NTuple{6, Real}","page":"Home","title":"CamiMath.CGC","text":"CGC(j1::Real, m1::Real, j2::Real, m2::Real, J::Real, M::Real [; msg=true])\n\nClebsch-Gordan coefficient (CGC). This is a vector-coupling coefficient in Dirac notation. The CGCs are zero unless Δ(j_1j_2j_3)0 (triangle inequality holds) and M=m_1+m_2. The relation to the Wigner 3j symbols is given by:\n\nlangle j_1m_1j_2m_2JMrangleequiv\n(-1)^j_1-j_2+Msqrt2J+1left(beginarrayccc\nj_1  j_2  J\nm_1  m_2  -M\nendarrayright)\n\nExample:\n\njulia> j1=3; m1=0; j2=4; m2=-1; J=5; M=-1;\n\njulia> o = CGC(j1, m1, j2, m2, J, M); println(\" = $o\")\n-√(361/2730) = -0.36364052611670255269921486774521555203216489725107181148303161368088211274565\n\njulia> o = CGC(j1, m1, j2, m2, J, M; msg=false); println(o)\n-0.36364052611670255269921486774521555203216489725107181148303161368088211274565\n\njulia> o = (-1)^(j1-j2+M) * sqrt(2J+1) * threeJsymbol(j1, m1, j2, m2, J, -M; msg=false); println(o)\n-0.36364052611670255269921486774521555203216489725107181148303161368088211274565\n\njulia> CGC(3, 0, 4, -1, 5, -1);\n-√(361/2730)\n\n\n\n\n\n","category":"method"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
