import linear_algebra.matrix.nonsingular_inverse
variables {R m n : Type*} [comm_ring R] [fintype m] [fintype n] [decidable_eq m] [decidable_eq n]
variables (A B : matrix n n R) (P : matrix m n R) (Q : matrix n m R)

open_locale matrix
open matrix

example : det (A⬝B) = det A * det B :=
by simp

example (h : is_unit A) : det (A⬝B⬝A⁻¹) = det B :=
by library_search  -- exact det_conj h B

example : det (1 + P⬝Q) = det (1 + Q⬝P) :=
by simp