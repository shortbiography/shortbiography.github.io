/////////////////////////////////////////////////////////////////////
// = NMatrix
//
// A linear algebra library for scientific computation in Ruby.
// NMatrix is part of SciRuby.
//
// NMatrix was originally inspired by and derived from NArray, by
// Masahiro Tanaka: http://narray.rubyforge.org
//
// == Copyright Information
//
// SciRuby is Copyright (c) 2010 - present, Ruby Science Foundation
// NMatrix is Copyright (c) 2012 - present, John Woods and the Ruby Science Foundation
//
// Please see LICENSE.txt for additional copyright notices.
//
// == Contributing
//
// By contributing source code to SciRuby, you agree to be bound by
// our Contributor Agreement:
//
// * https://github.com/SciRuby/sciruby/wiki/Contributor-Agreement
//
// == asum.h
//
// CBLAS asum function
//

/*
 *             Automatically Tuned Linear Algebra Software v3.8.4
 *                    (C) Copyright 1999 R. Clint Whaley
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *   1. Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *   2. Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions, and the following disclaimer in the
 *      documentation and/or other materials provided with the distribution.
 *   3. The name of the ATLAS group or the names of its contributers may
 *      not be used to endorse or promote products derived from this
 *      software without specific written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE ATLAS GROUP OR ITS CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 */

#ifndef ASUM_H
#define ASUM_H


#include "math/magnitude.h"

namespace nm { namespace math {

/*
 * Level 1 BLAS routine which sums the absolute values of a vector's contents. If the vector consists of complex values,
 * the routine sums the absolute values of the real and imaginary components as well.
 *
 * So, based on input types, these are the valid return types:
 *    int -> int
 *    float -> float or double
 *    double -> double
 *    complex64 -> float or double
 *    complex128 -> double
 */
template <typename DType, typename MDType = typename MagnitudeDType<DType>::type>
inline MDType asum(const int N, const DType* X, const int incX) {
  MDType sum = 0;
  if ((N > 0) && (incX > 0)) {
    for (int i = 0; i < N; ++i) {
      sum += magnitude(X[i*incX]);
    }
  }
  return sum;
}


template <typename DType, typename MDType = typename MagnitudeDType<DType>::type>
inline void cblas_asum(const int N, const void* X, const int incX, void* sum) {
  *reinterpret_cast<MDType*>( sum ) = asum<DType,MDType>( N, reinterpret_cast<const DType*>(X), incX );
}



}} // end of namespace nm::math

#endif // ASUM_H
