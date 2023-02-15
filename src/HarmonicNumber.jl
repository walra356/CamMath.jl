# SPDX-License-Identifier: MIT

# ==============================================================================
#                          harmonicNumber.jl
# ==============================================================================

# ..............................................................................
function _harmonicNumber_BigInt(n::Int, nc::Int, o)

    one = big(1)
    no = nc + 1 - length(o)

    for m = nc+1:n
        a = o[m-no] + one // big(m)
        Base.push!(o, a)
    end

    return o

end

# ..............................................................................
@doc raw"""
    harmonicNumber(n::Integer [[; arr=false], msg=true])
   
Sum of the reciprocals of the first ``n`` natural numbers
```math
    H_n=\sum_{k=1}^{n}\frac{1}{k}.
```
`arr` : output in array format

`msg` : integer-overflow protection (IOP) activation warning (for `n` > 46)
### Examples:
```
julia> o = [harmonicNumber(n) for n=1:8]; println(o)
Rational{Int64}[1//1, 3//2, 11//6, 25//12, 137//60, 49//20, 363//140, 761//280]

julia> harmonicNumber(46)
5943339269060627227//1345655451257488800

julia> harmonicNumber(47)
IOP capture: harmonicNumber(47) converted to Rational{BigInt}
280682601097106968469//63245806209101973600

julia> harmonicNumber(12) == harmonicNumber(12, 1)
true
```
"""
function harmonicNumber(n::Integer; arr=false, msg=true)

    num = (
        1, 3, 11, 25, 137, 49, 363, 761, 7129, 7381, 83711, 86021, 1145993,
        1171733, 1195757, 2436559, 42142223, 14274301, 275295799, 55835135,
        18858053, 19093197, 444316699, 1347822955, 34052522467, 34395742267,
        312536252003, 315404588903, 9227046511387, 9304682830147,
        290774257297357, 586061125622639, 53676090078349, 54062195834749,
        54437269998109, 54801925434709, 2040798836801833, 2053580969474233,
        2066035355155033, 2078178381193813, 85691034670497533,
        12309312989335019, 532145396070491417, 5884182435213075787,
        5914085889685464427, 5943339269060627227
    )

    den = (
        1, 2, 6, 12, 60, 20, 140, 280, 2520, 2520, 27720, 27720, 360360,
        360360, 360360, 720720, 12252240, 4084080, 77597520, 15519504, 5173168,
        5173168, 118982864, 356948592, 8923714800, 8923714800, 80313433200,
        80313433200, 2329089562800, 2329089562800, 72201776446800,
        144403552893600, 13127595717600, 13127595717600, 13127595717600,
        13127595717600, 485721041551200, 485721041551200, 485721041551200,
        485721041551200, 19914562703599200, 2844937529085600,
        122332313750680800, 1345655451257488800, 1345655451257488800,
        1345655451257488800
    )

    nc = 46

    if n < 0
        throw(DomainError(n))
    elseif n ≤ nc
        T = typeof(n)
    elseif n > nc
        T = BigInt
        if typeof(n) == Int
            str = "IOP capture: "
            str *= "harmonicNumber($n) converted to Rational{BigInt}"
            msg && println(str)
        end
    end

    n = convert(Int, n)

    if arr # ...................................................................
        if n ≤ nc
            return [Rational{T}(num[i] // den[i]) for i = 1:n]
        else
            o = [Rational{T}(num[i] // den[i]) for i = 1:nc]
            return _harmonicNumber_BigInt(n, nc, o)
        end
    else # .....................................................................
        if n ≤ nc
            return Rational{T}(num[n], den[n])
        else
            o = [Rational{BigInt}(num[nc], den[nc])]
            return _harmonicNumber_BigInt(n, nc, o)[end]
        end
    end # ......................................................................

end

# ==============================================================================
function _harmonicNumber_p_BigInt(n::Int, p::Int)

    one = big(1)

    o = Rational{BigInt}[one//one]

    for m = 2:n
        a = one
        for i = 1:p
            a *= big(m)
        end
        b = o[m-1] + one // a
        Base.push!(o, b)
    end

    return o

end
# ..............................................................................
function _harmonicNumber_BigInt(n::Int, nc::Int, p::Int, o)

    one = big(1)
    no = nc + 1 - length(o)

    for m = nc+1:n
        a = one
        for i = 1:p
            a *= big(m)
        end
        b = o[m-no] + one // a
        Base.push!(o, b)
    end

    return o

end
@doc raw"""
    harmonicNumber(n::Integer, p::Int [[; arr=false] , msg=true])

Sum of the ``p^{th}`` power of reciprocals of the first ``n`` positive integers,
```math
    H_{n,p}=\sum_{k=1}^{n}\frac{1}{k^p}.
```
`arr` : output in array format

`msg` : integer-overflow protection (IOP) activation warning
### Examples:
```
julia> harmonicNumber(46, 1)
5943339269060627227//1345655451257488800

julia> harmonicNumber(47, 1)
IOP capture: harmonicNumber(47, 1) converted to Rational{BigInt}
280682601097106968469//63245806209101973600

harmonicNumber(12, -3) == faulhaber_summation(12, 3)
  true

julia> o = [harmonicNumber(i, 5) for i=1:4]; println(o)
Rational{Int64}[1//1, 33//32, 8051//7776, 257875//248832]

julia> o = harmonicNumber(4, 5; arr=true); println(o)
Rational{Int64}[1//1, 33//32, 8051//7776, 257875//248832]
```
"""
function harmonicNumber(n::Integer, p::Int; arr=false, msg=true)

    n1 = (1, 3, 11, 25, 137, 49, 363, 761, 7129, 7381, 83711, 86021, 1145993,
        1171733, 1195757, 2436559, 42142223, 14274301, 275295799, 55835135,
        18858053, 19093197, 444316699, 1347822955, 34052522467, 34395742267,
        312536252003, 315404588903, 9227046511387, 9304682830147,
        290774257297357, 586061125622639, 53676090078349, 54062195834749,
        54437269998109, 54801925434709, 2040798836801833, 2053580969474233,
        2066035355155033, 2078178381193813, 85691034670497533,
        12309312989335019, 532145396070491417, 5884182435213075787,
        5914085889685464427, 5943339269060627227)
    n2 = (1, 5, 49, 205, 5269, 5369, 266681, 1077749, 9778141, 1968329,
        239437889, 240505109, 40799043101, 40931552621, 205234915681,
        822968714749, 238357395880861, 238820721143261, 86364397717734821,
        17299975731542641, 353562301485889, 354019312583809,
        187497409728228241, 187700554334941861)
    n3 = (1, 9, 251, 2035, 256103, 28567, 9822481, 78708473, 19148110939,
        19164113947, 25523438671457, 25535765062457, 56123375845866029,
        56140429821090029, 56154295334575853, 449325761325072949)
    n4 = (1, 17, 1393, 22369, 14001361, 14011361, 33654237761, 538589354801,
        43631884298881, 43635917056897, 638913789210188977,
        638942263173398977)
    n5 = (1, 33, 8051, 257875, 806108207, 268736069, 4516906311683,
        144545256245731, 105375212839937899, 105376229094957931)
    n6 = (1, 65, 47449, 3037465, 47463376609, 47464376609, 5584183099672241,
        357389058474664049)
    n7 = (1, 129, 282251, 36130315, 2822716691183, 940908897061,
        774879868932307123)
    n8 = (1, 257, 1686433, 431733409, 168646292872321, 168646392872321)
    n9 = (1, 513, 10097891, 5170139875, 10097934603139727, 373997614931101)
    n0 = (1, 1025, 60526249, 61978938025, 605263128567754849,
        605263138567754849)

    d1 = (1, 2, 6, 12, 60, 20, 140, 280, 2520, 2520, 27720, 27720, 360360,
        360360, 360360, 720720, 12252240, 4084080, 77597520, 15519504,
        5173168, 5173168, 118982864, 356948592, 8923714800, 8923714800,
        80313433200, 80313433200, 2329089562800, 2329089562800,
        72201776446800, 144403552893600, 13127595717600, 13127595717600,
        13127595717600, 13127595717600, 485721041551200, 485721041551200,
        485721041551200, 485721041551200, 19914562703599200,
        2844937529085600, 122332313750680800, 1345655451257488800,
        1345655451257488800, 1345655451257488800)
    d2 = (1, 4, 36, 144, 3600, 3600, 176400, 705600, 6350400, 1270080,
        153679680, 153679680, 25971865920, 25971865920, 129859329600,
        519437318400, 150117385017600, 150117385017600, 54192375991353600,
        10838475198270720, 221193371393280, 221193371393280,
        117011293467045120, 117011293467045120)
    d3 = (1, 8, 216, 1728, 216000, 24000, 8232000, 65856000, 16003008000,
        16003008000, 21300003648000, 21300003648000, 46796108014656000,
        46796108014656000, 46796108014656000, 374368864117248000)
    d4 = (1, 16, 1296, 20736, 12960000, 12960000, 31116960000, 497871360000,
        40327580160000, 40327580160000, 590436101122560000,
        590436101122560000)
    d5 = (1, 32, 7776, 248832, 777600000, 259200000, 4356374400000,
        139403980800000, 101625502003200000, 101625502003200000)
    d6 = (1, 64, 46656, 2985984, 46656000000, 46656000000, 5489031744000000,
        351298031616000000)
    d7 = (1, 128, 279936, 35831808, 2799360000000, 933120000000,
        768464444160000000)
    d8 = (1, 256, 1679616, 429981696, 167961600000000, 167961600000000)
    d9 = (1, 512, 10077696, 5159780352, 10077696000000000, 373248000000000)
    d0 = (1, 1024, 60466176, 61917364224, 604661760000000000,
        604661760000000000)

    no = (46, 24, 16, 12, 10, 8, 7, 6, 6, 6)

    n ≠ 0 || return n
    p ≠ 0 || return n

    if p > 0 # -----------------------------------------------------------------
        nc = p < 11 ? no[p] : p < 18 ? 4 : p < 25 ? 3 : 0

        if n < 0
            throw(DomainError(n))
        elseif n ≤ nc
            T = typeof(n)
        elseif n > nc
            T = BigInt
            if typeof(n) == Int
                str = "IOP capture: "
                str *= "harmonicNumber($n, $p) converted to Rational{BigInt}"
                msg && println(str)
            end
        end

        n = convert(Int, n)

        if arr # ...............................................................
            if n ≤ nc
                o = p == 1 ? Rational{T}[n1[i] // d1[i] for i = 1:n] :
                        p == 2 ? Rational{T}[n2[i] // d2[i] for i = 1:n] :
                        p == 3 ? Rational{T}[n3[i] // d3[i] for i = 1:n] :
                        p == 4 ? Rational{T}[n4[i] // d4[i] for i = 1:n] :
                        p == 5 ? Rational{T}[n5[i] // d5[i] for i = 1:n] :
                        p == 6 ? Rational{T}[n6[i] // d6[i] for i = 1:n] :
                        p == 7 ? Rational{T}[n7[i] // d7[i] for i = 1:n] :
                        p == 8 ? Rational{T}[n8[i] // d8[i] for i = 1:n] :
                        p == 9 ? Rational{T}[n9[i] // d9[i] for i = 1:n] :
                        p == 10 ? Rational{T}[n0[i] // d0[i] for i = 1:n] :
                        _harmonicNumber_p_BigInt(n, p)
                return o
            else  
                o = p == 1 ? Rational{T}[n1[i] // d1[i] for i = 1:nc] :
                    p == 2 ? Rational{T}[n2[i] // d2[i] for i = 1:nc] :
                    p == 3 ? Rational{T}[n3[i] // d3[i] for i = 1:nc] :
                    p == 4 ? Rational{T}[n4[i] // d4[i] for i = 1:nc] :
                    p == 5 ? Rational{T}[n5[i] // d5[i] for i = 1:nc] :
                    p == 6 ? Rational{T}[n6[i] // d6[i] for i = 1:nc] :
                    p == 7 ? Rational{T}[n7[i] // d7[i] for i = 1:nc] :
                    p == 8 ? Rational{T}[n8[i] // d8[i] for i = 1:nc] :
                    p == 9 ? Rational{T}[n9[i] // d9[i] for i = 1:nc] :
                    p == 10 ? Rational{T}[n0[i] // d0[i] for i = 1:nc] :
                    _harmonicNumber_p_BigInt(nc, p)
                return _harmonicNumber_BigInt(n, nc, p, o)
            end
        else #..................................................................
            if n ≤ nc
                o = p == 1 ? Rational{T}(n1[n], d1[n]) :
                    p == 2 ? Rational{T}(n2[n], d2[n]) :
                    p == 3 ? Rational{T}(n3[n], d3[n]) :
                    p == 4 ? Rational{T}(n4[n], d4[n]) :
                    p == 5 ? Rational{T}(n5[n], d5[n]) :
                    p == 6 ? Rational{T}(n6[n], d6[n]) :
                    p == 7 ? Rational{T}(n7[n], d7[n]) :
                    p == 8 ? Rational{T}(n8[n], d8[n]) :
                    p == 9 ? Rational{T}(n9[n], d9[n]) :
                    p == 10 ? Rational{T}(n0[n], d0[n]) :
                    _harmonicNumber_p_BigInt(n, p)[end]
                return o
            else
                o = p == 1 ? Rational{T}(n1[end], d1[end]) :
                    p == 2 ? Rational{T}(n2[end], d2[end]) :
                    p == 3 ? Rational{T}(n3[end], d3[end]) :
                    p == 4 ? Rational{T}(n4[end], d4[end]) :
                    p == 5 ? Rational{T}(n5[end], d5[end]) :
                    p == 6 ? Rational{T}(n6[end], d6[end]) :
                    p == 7 ? Rational{T}(n7[end], d7[end]) :
                    p == 8 ? Rational{T}(n8[end], d8[end]) :
                    p == 9 ? Rational{T}(n9[end], d9[end]) :
                    p == 10 ? Rational{T}(n0[end], d0[end]) :
                    _harmonicNumber_p_BigInt(nc, p)[end]
                return _harmonicNumber_BigInt(n, nc, p, [o])[end]
            end
        end # ..................................................................
    else # ---------------------------------------------------------------------
        return CamiMath.faulhaber_summation(n, -p; msg)
    end  # ---------------------------------------------------------------------

end