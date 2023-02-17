# SPDX-License-Identifier: MIT

# author: Jook Walraven - 12-2-2023

# ==============================================================================
#                          Faulhaber.jl
# ==============================================================================

# ------------------------------------------------------------------------------
#               faulhaber_polynom(p::Integer [; msg=true])
# ------------------------------------------------------------------------------

# ..............................................................................
function _faulhaber_BigInt(p::Integer)

    p = big(p)

    P = CamiMath.pascal_triangle(p)
    B = CamiMath.bernoulliB(p; msg=false, arr=true)
    B[2] = -B[2]                                

    F = (B .* P) // p
    
    F = Base.reverse(F)               # reverse to standard order
    
    F[1] = big(0) // big(1)           # add polynomial constant: c_0 = 0//1

    return F  

end

# ..............................................................................
@doc raw"""
    faulhaber_polynom(p::Integer [; msg=true])

Vector representation of the coefficients of the [`faulhaber_polynomial`](@ref) 
of degree `p` 
```math
   c=[c_0,⋯\ c_p]
```
where ``c_0=0,\ \ c_j=\frac{1}{p}{\binom{p}{p-j}}B_{p-j}``,
with ``j∈\{ 1,⋯\ p\}``. The ``B_{p-j}`` are [`bernoulliB`](@ref) in the 
*even index convention* (but with 
``B_1=+\frac{1}{2}`` rather than ``-\frac{1}{2}``).

Integer overflow protection (IOP): for `p > 36` the output is converted 
to Rational{BigInt}. By default the IOP capture message is activated.
### Example:
```
faulhaber_polynom(6)
7-element Vector{Rational{Int64}}:
  0//1
  0//1
 -1//12
  0//1
  5//12
  1//2
  1//6
```
"""
function faulhaber_polynom(p::Integer; msg=true)

    N = (
        (0, 1), (0, 1, 1), (0, 1, 3, 2), (0, 0, 1, 2, 1),
        (0, -1, 0, 10, 15, 6), (0, 0, -1, 0, 5, 6, 2),
        (0, 1, 0, -7, 0, 21, 21, 6), (0, 0, 2, 0, -7, 0, 14, 12, 3),
        (0, -3, 0, 20, 0, -42, 0, 60, 45, 10),
        (0, 0, -3, 0, 10, 0, -14, 0, 15, 10, 2),
        (0, 5, 0, -33, 0, 66, 0, -66, 0, 55, 33, 6),
        (0, 0, 10, 0, -33, 0, 44, 0, -33, 0, 22, 12, 2),
        (0, -691, 0, 4550, 0, -9009, 0, 8580, 0, -5005, 0, 2730, 1365, 210),
        (0, 0, -691, 0, 2275, 0, -3003, 0, 2145, 0, -1001, 0, 455, 210, 30),
        (0, 105, 0, -691, 0, 1365, 0, -1287, 0, 715, 0, -273, 0, 105, 45, 6),
        (0, 0, 420, 0, -1382, 0, 1820, 0, -1287, 0, 572, 0, -182,
            0, 60, 24, 3),
        (0, -3617, 0, 23800, 0, -46988, 0, 44200, 0, -24310, 0, 8840,
            0, -2380, 0, 680, 255, 30),
        (0, 0, -10851, 0, 35700, 0, -46988, 0, 33150, 0, -14586, 0, 4420,
            0, -1020, 0, 255, 90, 10),
        (0, 219335, 0, -1443183, 0, 2848860, 0, -2678316, 0, 1469650,
            0, -529074, 0, 135660, 0, -27132, 0, 5985, 1995, 210),
        (0, 0, 438670, 0, -1443183, 0, 1899240, 0, -1339158, 0, 587860,
            0, -176358, 0, 38760, 0, -6783, 0, 1330, 420, 42),
        (0, -3666831, 0, 24126850, 0, -47625039, 0, 44767800, 0, -24551230,
            0, 8817900, 0, -2238390, 0, 426360, 0, -65835, 0, 11550, 3465, 330),
        (0, 0, -3666831, 0, 12063425, 0, -15875013, 0, 11191950, 0, -4910246,
            0, 1469650, 0, -319770, 0, 53295, 0, -7315, 0, 1155, 330, 30),
        (0, 4272565, 0, -28112371, 0, 55491755, 0, -52160757, 0, 28601650,
            0, -10266878, 0, 2600150, 0, -490314, 0, 72105, 0, -8855,
            0, 1265, 345, 30),
        (0, 0, 51270780, 0, -168674226, 0, 221967020, 0, -156482271,
            0, 68643960, 0, -20533756, 0, 4457400, 0, -735471, 0, 96140,
            0, -10626, 0, 1380, 360, 30), (0, -1181820455, 0, 7776068300,
            0, -15349354566, 0, 14427856300, 0, -7911048145, 0, 2839363800,
            0, -718681460, 0, 135207800, 0, -19684665, 0, 2302300, 0, -230230,
            0, 27300, 6825, 546),
        (0, 0, -1181820455, 0, 3888034150, 0, -5116451522, 0, 3606964075,
            0, -1582209629, 0, 473227300, 0, -102668780, 0, 16900975,
            0, -2187185, 0, 230230, 0, -20930, 0, 2275, 546, 42),
        (0, 538845489, 0, -3545461365, 0, 6998461470, 0, -6578294814,
            0, 3606964075, 0, -1294535151, 0, 327618900, 0, -61601268,
            0, 8947575, 0, -1036035, 0, 98670, 0, -8190, 0, 819, 189, 14),
        (0, 0, 1077690978, 0, -3545461365, 0, 4665640980, 0, -3289147407,
            0, 1442785630, 0, -431511717, 0, 93605400, 0, -15400317,
            0, 1988350, 0, -207207, 0, 17940, 0, -1365, 0, 126, 28, 2),
        (0, -23749461029, 0, 156265191810, 0, -308455138755, 0, 289936260900,
            0, -158975458005, 0, 57055613550, 0, -14439045915, 0, 2714556600,
            0, -394066935, 0, 45522750, 0, -4292145, 0, 339300, 0, -23751,
            0, 2030, 435, 30),
        (0, 0, -23749461029, 0, 78132595905, 0, -102818379585, 0, 72484065225,
            0, -31795091601, 0, 9509268925, 0, -2062720845, 0, 339319575,
            0, -43785215, 0, 4552275, 0, -390195, 0, 28275, 0, -1827,
            0, 145, 30, 2),
        (0, 8615841276005, 0, -56689963476223, 0, 111901503855141,
            0, -105183202315455, 0, 57673154564025, 0, -20698604632251,
            0, 5238144213225, 0, -984742931403, 0, 142933380975,
            0, -16502417085, 0, 1552325775, 0, -121486365, 0, 8099091,
            0, -484561, 0, 35805, 7161, 462),
        (0, 0, 68926730208040, 0, -226759853904892, 0, 298404010280376,
            0, -210366404630910, 0, 92277047302440, 0, -27598139509668,
            0, 5986450529400, 0, -984742931403, 0, 127051894200,
            0, -13201933668, 0, 1128964200, 0, -80990910, 0, 4984056,
            0, -276892, 0, 19096, 3696, 231),
        (0, -1780853160521127, 0, 11717544135366800, 0, -23129505098298984,
            0, 21740863606141680, 0, -11920762929084900, 0, 4278299465840400,
            0, -1082696242302360, 0, 203539317999600, 0, -29542287942090,
            0, 3410340318000, 0, -320618389080, 0, 25033554000, 0, -1652214564,
            0, 94143280, 0, -4869480, 0, 314160, 58905, 3570),
        (0, 0, -1780853160521127, 0, 5858772067683400, 0, -7709835032766328,
            0, 5435215901535420, 0, -2384152585816980, 0, 713049910973400,
            0, -154670891757480, 0, 25442414749950, 0, -3282476438010,
            0, 341034031800, 0, -29147126280, 0, 2086129500, 0, -127093428,
            0, 6724520, 0, -324632, 0, 19635, 3570, 210),
        (0, 90219075042845, 0, -593617720173709, 0, 1171754413536680,
            0, -1101405004680904, 0, 603912877948380, 0, -216741144165180,
            0, 54849993151800, 0, -10311392783832, 0, 1496612632350,
            0, -172761917790, 0, 16239715800, 0, -1267266360, 0, 83445180,
            0, -4707164, 0, 231880, 0, -10472, 0, 595, 105, 6),
        (0, 0, 541314450257070, 0, -1780853160521127, 0, 2343508827073360,
            0, -1652107507021356, 0, 724695453538056, 0, -216741144165180,
            0, 47014279844400, 0, -7733544587874, 0, 997741754900,
            0, -103657150674, 0, 8858026800, 0, -633633180, 0, 38513160,
            0, -2017356, 0, 92752, 0, -3927, 0, 210, 36, 2)
    )

    D = (
        1, 2, 6, 4, 30, 12, 42, 24, 90, 20, 66, 24, 2730, 420, 90, 48, 510,
        180, 3990, 840, 6930, 660, 690, 720, 13650, 1092, 378, 56, 870, 60,
        14322, 7392, 117810, 7140, 210, 72
    )

    U = typeof(p)
    T = p > 36 ? BigInt : U

    if p < 0
        throw(DomainError(p))
    elseif p ≤ 36
        return N[p] .// T(D[p])
    else
        str = "IOP capture: "
        str *= "faulhaber_polynomial($p) converted to Rational{BigInt}"
        msg && U ≠ BigInt && println(str)
        return _faulhaber_BigInt(p)
    end

end

# ------------------------------------------------------------------------------
#           faulhaber_polynomial(n::Integer, p::Int [; msg=true])
# ------------------------------------------------------------------------------

@doc raw"""
    faulhaber_polynomial(n::Integer, p::Int [; msg=true])

Faulhaber polynomial of degree `p` 
```math
    F(n,p)=\sum_{j=0}^{p}c_{j}n^{j},
```
where `n` is a positive integer and the coefficients are contained in the 
vector ``c=[c_0,⋯\ c_p]`` given by [`faulhaber_polynom`](@ref).

Integer overflow protection (IOP): on integer overflow the output is converted 
to Rational{BigInt}. By default the IOP capture message is activated.
### Example:
```
julia> faulhaber_polynomial(3, 6)
276

julia> faulhaber_polynomial(5, 30)
IOP capture: faulhaber_polynomial(5, 30) autoconverted to Rational{BigInt}
186552813930161650665
```
"""
function faulhaber_polynomial(n::Integer, p::Int; msg=true)

    if n ≤ 0
        n < 0 ? throw(DomainError(n)) : return typeof(n)(0)
    elseif p ≤ 0
        p < 0 ? throw(DomainError(p)) : return typeof(n)(0)
    elseif p ≤ 36
        T = (float(n)^p < 9.223372036854776e12) ? typeof(n) : BigInt
    else
        T = BigInt
        str = "IOP - capture: "
        str *= "faulhaber_polynomial($n, $p) converted to Rational{BigInt}"
        msg && typeof(n) == Int && println(str)
    end

    F = CamiMath.faulhaber_polynom(T(p); msg=false)
    n = T(n)
    o = T(0)
    for k = 1:p
        m = T(1)
        for i = 1:k
            m *= n  # avoid n^k in o = Base.sum([F[k+1]*n^k for k=1:p+1])
        end
        a = m * F[1+k]
        o += a
    end

    Base.denominator(o) == 1 || error("Error: Faulhaber sum failed")

    return Base.numerator(o)

end

# ------------------------------------------------------------------------------
#               faulhaber_summation(n::Integer, p::Int [; msg=true])
# ------------------------------------------------------------------------------

@doc raw"""
    faulhaber_summation(n::Integer, p::Int [; msg=true])

Sum of the ``p^{th}`` power of the first ``n`` natural numbers
```math
    \sum_{k=1}^{n}k^{p}=H_{n,-p}=F(n,p+1).
```
where ``H_{n,-p}`` is a [`harmonicNumber`](@ref)  of power `-p` and ``F(n,p)`` 
a [`faulhaber_polynomial`](@ref) of power `p`.

Integer overflow protection (IOP): on integer overflow the output is converted 
to Rational{BigInt}. By default the IOP capture message is activated.
### Examples:
```
julia> faulhaber_summation(3,5)
276

julia> faulhaber_summation(3,60)
IOP capture: faulhaber_polynom autoconverted to Rational{BigInt}
42391158276369125018901280178
```
"""
function faulhaber_summation(n::Integer, p::Int; msg=true)

    o = CamiMath.faulhaber_polynomial(n, p + 1; msg)

    return o

end

x = (
    (0 // 1, 1 // 1), (0 // 1, 1 // 2, 1 // 2),
    (0 // 1, 1 // 6, 1 // 2, 1 // 3),
    (0 // 1, 0 // 1, 1 // 4, 1 // 2, 1 // 4),
    (0 // 1, -1 // 30, 0 // 1, 1 // 3, 1 // 2, 1 // 5),
    (0 // 1, 0 // 1, -1 // 12, 0 // 1, 5 // 12, 1 // 2, 1 // 6),
    (0 // 1, 1 // 42, 0 // 1, -1 // 6, 0 // 1, 1 // 2, 1 // 2, 1 // 7),
    (0 // 1, 0 // 1, 1 // 12, 0 // 1, -7 // 24, 0 // 1, 7 // 12, 1 // 2,
        1 // 8),
    (0 // 1, -1 // 30, 0 // 1, 2 // 9, 0 // 1, -7 // 15, 0 // 1, 2 // 3,
        1 // 2, 1 // 9),
    (0 // 1, 0 // 1, -3 // 20, 0 // 1, 1 // 2, 0 // 1, -7 // 10, 0 // 1,
        3 // 4, 1 // 2, 1 // 10),
    (0 // 1, 5 // 66, 0 // 1, -1 // 2, 0 // 1, 1 // 1, 0 // 1, -1 // 1,
        0 // 1, 5 // 6, 1 // 2, 1 // 11),
    (0 // 1, 0 // 1, 5 // 12, 0 // 1, -11 // 8, 0 // 1, 11 // 6, 0 // 1,
        -11 // 8, 0 // 1, 11 // 12, 1 // 2, 1 // 12),
    (0 // 1, -691 // 2730, 0 // 1, 5 // 3, 0 // 1, -33 // 10, 0 // 1,
        22 // 7, 0 // 1, -11 // 6, 0 // 1, 1 // 1, 1 // 2, 1 // 13),
    (0 // 1, 0 // 1, -691 // 420, 0 // 1, 65 // 12, 0 // 1, -143 // 20,
        0 // 1, 143 // 28, 0 // 1, -143 // 60, 0 // 1, 13 // 12, 1 // 2,
        1 // 14),
    (0 // 1, 7 // 6, 0 // 1, -691 // 90, 0 // 1, 91 // 6, 0 // 1,
        -143 // 10, 0 // 1, 143 // 18, 0 // 1, -91 // 30, 0 // 1, 7 // 6,
        1 // 2, 1 // 15),
    (0 // 1, 0 // 1, 35 // 4, 0 // 1, -691 // 24, 0 // 1, 455 // 12, 0 // 1,
        -429 // 16, 0 // 1, 143 // 12, 0 // 1, -91 // 24, 0 // 1, 5 // 4,
        1 // 2, 1 // 16),
    (0 // 1, -3617 // 510, 0 // 1, 140 // 3, 0 // 1, -1382 // 15, 0 // 1,
        260 // 3, 0 // 1, -143 // 3, 0 // 1, 52 // 3, 0 // 1, -14 // 3,
        0 // 1, 4 // 3, 1 // 2, 1 // 17),
    (0 // 1, 0 // 1, -3617 // 60, 0 // 1, 595 // 3, 0 // 1, -11747 // 45,
        0 // 1, 1105 // 6, 0 // 1, -2431 // 30, 0 // 1, 221 // 9, 0 // 1,
        -17 // 3, 0 // 1, 17 // 12, 1 // 2, 1 // 18),
    (0 // 1, 43867 // 798, 0 // 1, -3617 // 10, 0 // 1, 714 // 1, 0 // 1,
        -23494 // 35, 0 // 1, 1105 // 3, 0 // 1, -663 // 5, 0 // 1, 34 // 1,
        0 // 1, -34 // 5, 0 // 1, 3 // 2, 1 // 2, 1 // 19),
    (0 // 1, 0 // 1, 43867 // 84, 0 // 1, -68723 // 40, 0 // 1, 2261 // 1,
        0 // 1, -223193 // 140, 0 // 1, 4199 // 6, 0 // 1, -4199 // 20,
        0 // 1, 323 // 7, 0 // 1, -323 // 40, 0 // 1, 19 // 12,
        1 // 2, 1 // 20),
    (0 // 1, -174611 // 330, 0 // 1, 219335 // 63, 0 // 1, -68723 // 10,
        0 // 1, 6460 // 1, 0 // 1, -223193 // 63, 0 // 1, 41990 // 33,
        0 // 1, -323 // 1, 0 // 1, 1292 // 21, 0 // 1, -19 // 2, 0 // 1,
        5 // 3, 1 // 2, 1 // 21),
    (0 // 1, 0 // 1, -1222277 // 220, 0 // 1, 219335 // 12, 0 // 1,
        -481061 // 20, 0 // 1, 33915 // 2, 0 // 1, -223193 // 30, 0 // 1,
        146965 // 66, 0 // 1, -969 // 2, 0 // 1, 323 // 4, 0 // 1,
        -133 // 12, 0 // 1, 7 // 4, 1 // 2, 1 // 22),
    (0 // 1, 854513 // 138, 0 // 1, -1222277 // 30, 0 // 1, 482537 // 6,
        0 // 1, -755953 // 10, 0 // 1, 124355 // 3, 0 // 1, -223193 // 15,
        0 // 1, 11305 // 3, 0 // 1, -3553 // 5, 0 // 1, 209 // 2, 0 // 1,
        -77 // 6, 0 // 1, 11 // 6, 1 // 2, 1 // 23),
    (0 // 1, 0 // 1, 854513 // 12, 0 // 1, -28112371 // 120, 0 // 1,
        11098351 // 36, 0 // 1, -17386919 // 80, 0 // 1, 572033 // 6,
        0 // 1, -5133439 // 180, 0 // 1, 37145 // 6, 0 // 1, -81719 // 80,
        0 // 1, 4807 // 36, 0 // 1, -1771 // 120, 0 // 1, 23 // 12, 1 // 2,
        1 // 24),
    (0 // 1, -236364091 // 2730, 0 // 1, 1709026 // 3, 0 // 1,
        -28112371 // 25, 0 // 1, 22196702 // 21, 0 // 1, -17386919 // 30,
        0 // 1, 208012 // 1, 0 // 1, -10266878 // 195, 0 // 1, 29716 // 3,
        0 // 1, -14421 // 10, 0 // 1, 506 // 3, 0 // 1, -253 // 15, 0 // 1,
        2 // 1, 1 // 2, 1 // 25),
    (0 // 1, 0 // 1, -1181820455 // 1092, 0 // 1, 21362825 // 6, 0 // 1,
        -28112371 // 6, 0 // 1, 277458775 // 84, 0 // 1, -17386919 // 12,
        0 // 1, 1300075 // 3, 0 // 1, -25667195 // 273, 0 // 1,
        185725 // 12, 0 // 1, -24035 // 12, 0 // 1, 1265 // 6, 0 // 1,
        -115 // 6, 0 // 1, 25 // 12, 1 // 2, 1 // 26),
    (0 // 1, 8553103 // 6, 0 // 1, -1181820455 // 126, 0 // 1,
        55543345 // 3, 0 // 1, -52208689 // 3, 0 // 1, 3606964075 // 378,
        0 // 1, -20548177 // 6, 0 // 1, 2600150 // 3, 0 // 1,
        -10266878 // 63, 0 // 1, 142025 // 6, 0 // 1, -16445 // 6, 0 // 1,
        16445 // 63, 0 // 1, -65 // 3, 0 // 1, 13 // 6, 1 // 2, 1 // 27),
    (0 // 1, 0 // 1, 76977927 // 4, 0 // 1, -3545461365 // 56, 0 // 1,
        166630035 // 2, 0 // 1, -469878201 // 8, 0 // 1, 721392815 // 28,
        0 // 1, -61644531 // 8, 0 // 1, 1671525 // 1, 0 // 1,
        -15400317 // 56, 0 // 1, 142025 // 4, 0 // 1, -29601 // 8, 0 // 1,
        4485 // 14, 0 // 1, -195 // 8, 0 // 1, 9 // 4, 1 // 2, 1 // 28),
    (0 // 1, -23749461029 // 870, 0 // 1, 179615163 // 1, 0 // 1,
        -709092273 // 2, 0 // 1, 333260070 // 1, 0 // 1, -365460823 // 2,
        0 // 1, 65581165 // 1, 0 // 1, -33193209 // 2, 0 // 1,
        3120180 // 1, 0 // 1, -905901 // 2, 0 // 1, 52325 // 1, 0 // 1,
        -9867 // 2, 0 // 1, 390 // 1, 0 // 1, -273 // 10, 0 // 1, 7 // 3,
        1 // 2, 1 // 29),
    (0 // 1, 0 // 1, -23749461029 // 60, 0 // 1, 5208839727 // 4, 0 // 1,
        -6854558639 // 4, 0 // 1, 4832271015 // 4, 0 // 1,
        -10598363867 // 20, 0 // 1, 1901853785 // 12, 0 // 1,
        -137514723 // 4, 0 // 1, 22621305 // 4, 0 // 1, -8757043 // 12,
        0 // 1, 303485 // 4, 0 // 1, -26013 // 4, 0 // 1, 1885 // 4,
        0 // 1, -609 // 20, 0 // 1, 29 // 12, 1 // 2, 1 // 30),
    (0 // 1, 8615841276005 // 14322, 0 // 1, -23749461029 // 6, 0 // 1,
        15626519181 // 2, 0 // 1, -102818379585 // 14, 0 // 1,
        8053785025 // 2, 0 // 1, -31795091601 // 22, 0 // 1,
        731482225 // 2, 0 // 1, -137514723 // 2, 0 // 1, 19959975 // 2,
        0 // 1, -2304485 // 2, 0 // 1, 216775 // 2, 0 // 1, -16965 // 2,
        0 // 1, 1131 // 2, 0 // 1, -203 // 6, 0 // 1, 5 // 2, 1 // 2,
        1 // 31),
    (0 // 1, 0 // 1, 8615841276005 // 924, 0 // 1, -736233291899 // 24,
        0 // 1, 161474031537 // 4, 0 // 1, -3187369767135 // 112, 0 // 1,
        49933467155 // 4, 0 // 1, -328549279877 // 88, 0 // 1,
        22675948975 // 28, 0 // 1, -4262956413 // 32, 0 // 1,
        68751025 // 4, 0 // 1, -14287807 // 8, 0 // 1, 6720025 // 44,
        0 // 1, -175305 // 16, 0 // 1, 2697 // 4, 0 // 1, -899 // 24,
        0 // 1, 31 // 12, 1 // 2, 1 // 32),
    (0 // 1, -7709321041217 // 510, 0 // 1, 68926730208040 // 693, 0 // 1,
        -2944933167596 // 15, 0 // 1, 184541750328 // 1, 0 // 1,
        -2124913178090 // 21, 0 // 1, 36315248840 // 1, 0 // 1,
        -101092086116 // 11, 0 // 1, 36281518360 // 21, 0 // 1,
        -4262956413 // 17, 0 // 1, 28947800 // 1, 0 // 1, -57151228 // 21,
        0 // 1, 2337400 // 11, 0 // 1, -70122 // 5, 0 // 1, 7192 // 9,
        0 // 1, -124 // 3, 0 // 1, 8 // 3, 1 // 2, 1 // 33),
    (0 // 1, 0 // 1, -84802531453387 // 340, 0 // 1, 17231682552010 // 21,
        0 // 1, -16197132421778 // 15, 0 // 1, 761234720103 // 1, 0 // 1,
        -2337404495899 // 7, 0 // 1, 99866934310 // 1, 0 // 1,
        -21662589882 // 1, 0 // 1, 49887087745 // 14, 0 // 1,
        -15630840181 // 34, 0 // 1, 47763870 // 1, 0 // 1, -28575614 // 7,
        0 // 1, 292175 // 1, 0 // 1, -89001 // 5, 0 // 1, 19778 // 21,
        0 // 1, -682 // 15, 0 // 1, 11 // 4, 1 // 2, 1 // 34),
    (0 // 1, 2577687858367 // 6, 0 // 1, -84802531453387 // 30, 0 // 1,
        117175441353668 // 21, 0 // 1, -78671786048636 // 15, 0 // 1,
        2875775609278 // 1, 0 // 1, -7224704805506 // 7, 0 // 1,
        261190443580 // 1, 0 // 1, -245509351996 // 5,
        0 // 1, 49887087745 // 7, 0 // 1, -822675799 // 1, 0 // 1,
        77331980 // 1, 0 // 1, -42242212 // 7, 0 // 1, 397358 // 1, 0 // 1,
        -336226 // 15, 0 // 1, 23188 // 21, 0 // 1, -748 // 15, 0 // 1,
        17 // 6, 1 // 2, 1 // 35),
    (0 // 1, 0 // 1, 90219075042845 // 12, 0 // 1, -593617720173709 // 24,
        0 // 1, 292938603384170 // 9, 0 // 1, -137675625585113 // 6,
        0 // 1, 10065214632473 // 1, 0 // 1, -18061762013765 // 6, 0 // 1,
        652976108950 // 1, 0 // 1, -429641365993 // 4, 0 // 1,
        249435438725 // 18, 0 // 1, -5758730593 // 4, 0 // 1,
        123028150 // 1, 0 // 1, -52802765 // 6, 0 // 1, 534905 // 1,
        0 // 1, -168113 // 6, 0 // 1, 11594 // 9, 0 // 1, -1309 // 24,
        0 // 1, 35 // 12, 1 // 2, 1 // 36)
)