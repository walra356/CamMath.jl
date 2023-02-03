# SPDX-License-Identifier: MIT

# ==============================================================================
#                          Faulhaber.jl
# ==============================================================================

@doc raw"""
    faulhaber_polynom(p::T) where {T<:Integer}

Vector representation of the coefficients of the [`faulhaber_polynomial`](@ref) 
of degree `p` 
```math
   c=[c_0,⋯\ c_p]
```
with vector elements
```math
    c_0=0\ \rm{and}\ c_j=\frac{1}{p}{\binom {p}{p-j}}B_{p-j},
```
where ``j∈\{ 1,⋯\ p\}``. The ``B_0,⋯\ B_{p-1}`` are Bernoulli numbers
(but with ``B_1=+\frac{1}{2}`` rather than ``-\frac{1}{2}``).
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
function faulhaber_polynom(p::T) where {T<:Integer}

    p < 1 && return 0
    p > 1 || return 1 // 1

    P = CamMath.pascal_triangle(p)[end][1:end-1]
    B = CamMath.bernoulliB_array(p - 1)  # was bernoulliB_array(p-1; T)
    B[2] = -B[2]

    F = (B .* P) // p

    F = Base.append!(F, 0 // 1)   # add polynomial constant (zero in this case)

    return Base.reverse(F)     # reverse to standard order

end

# ==================== faulhaber_polynomial(n,p) ===============================

@doc raw"""
    faulhaber_polynomial(n::T, p::T) where {T<:Integer}

Faulhaber polynomial of degree `p` 
```math
    F(n,p)=\sum_{j=1}^{p}c_{j}n^{j},
```
where the coefficients are contained in the coefficient vector 
[`faulhaber_polynom`](@ref).
### Example:
```
```
"""
function faulhaber_polynomial(n::T, p::T) where {T<:Integer}

    n ≠ 0 || return 0

    F = CamMath.faulhaber_polynom(p)
    o = 0
    for k = 1:p
        for i = 1:k
            F[k] *= n # avoid n^k in o = Base.sum([F[k+1]*n^k for k=1:p+1])
        end
        o += F[k]
    end

    Base.denominator(o) == 1 || error("Error: Faulhaber sum failed")

    return Base.numerator(o)

end

# =================================== faulhaber_summation(n,p;T) ===============

@doc raw"""
    faulhaber_summation(n::T, p::T) where {T<:Integer}

Sum of powers of natural numbers ``1,⋯\ n``,
```math
    FS(n,p)=\sum_{k=1}^{n}k^{p}=F(n,p+1).
```
where ``F(n,p)`` is the Faulhamer polynomial of degree ``p``.
### Examples:
```
faulhaber_summation(5,1)
 15

faulhaber_summation(3,60; T=BigInt)
  42391158276369125018901280178
```
"""
function faulhaber_summation(n::T, p::T) where {T<:Integer}

    n ≠ 0 || return 0

    F = CamMath.faulhaber_polynom(p + 1)
    o = 0
    for k = 1:p+1
        for i = 1:k
            F[k+1] *= n # avoid n^k in o = Base.sum([F[k+1]*n^k for k=1:p+1])
        end
        o += F[k+1]
    end

    Base.denominator(o) == 1 || error("Error: Faulhaber sum failed")

    return Base.numerator(o)

end