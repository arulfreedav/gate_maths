# Complete Linear Algebra Theory & Revision Handbook
## For GATE CS (Section 1) & GATE DA (Section 2)

---

## Table of Contents
1. [Matrices & Basic Operations](#1-matrices--basic-operations)
2. [Determinants & Shortcut Theorems](#2-determinants--shortcut-theorems)
3. [Adjoint & Inverse Theorems](#3-adjoint--inverse-theorems)
4. [Matrix Rank & Fundamental Subspaces](#4-matrix-rank--fundamental-subspaces)
5. [Systems of Linear Equations ($Ax = b$)](#5-systems-of-linear-equations-ax--b)
6. [LU Decomposition & Gaussian Elimination](#6-lu-decomposition--gaussian-elimination)
7. [Eigenvalues & Eigenvectors](#7-eigenvalues--eigenvectors)
8. [Cayley-Hamilton Theorem & Matrix Powers](#8-cayley-hamilton-theorem--matrix-powers)
9. [Diagonalization & Spectral Theorem](#9-diagonalization--spectral-theorem)
10. [Vector Spaces, Subspaces, Basis & Dimension](#10-vector-spaces-subspaces-basis--dimension)
11. [Orthogonality, Gram-Schmidt & Projections](#11-orthogonality-gram-schmidt--projections)
12. [Special Matrices: Idempotent, Orthogonal & Nilpotent](#12-special-matrices)
13. [Quadratic Forms & Positive Definiteness](#13-quadratic-forms--positive-definiteness)
14. [Singular Value Decomposition (SVD) & Matrix Norms](#14-singular-value-decomposition-svd--matrix-norms)
15. [GATE Trap Alert Checklist](#15-gate-trap-alert-checklist)

---

## 1. Matrices & Basic Operations

### 1.1 Types of Matrices
- **Square Matrix:** An $m \times n$ matrix with $m = n$.
- **Diagonal Matrix:** $A = \text{diag}(d_1, d_2, \dots, d_n)$ where $a_{ij} = 0$ for all $i \neq j$.
- **Scalar Matrix:** A diagonal matrix with all diagonal elements equal ($A = c I$).
- **Upper Triangular Matrix:** $a_{ij} = 0$ for all $i > j$.
- **Lower Triangular Matrix:** $a_{ij} = 0$ for all $i < j$.
- **Symmetric Matrix:** $A^T = A$ ($a_{ij} = a_{ji}$). Always square.
- **Skew-Symmetric Matrix:** $A^T = -A$ ($a_{ij} = -a_{ji}$).
  - *Key Property:* Main diagonal entries are identically zero ($a_{ii} = -a_{ii} \implies a_{ii} = 0$).
  - For an odd-order skew-symmetric matrix, $\det(A) = 0$.
- **Orthogonal Matrix:** $A^T A = A A^T = I \iff A^{-1} = A^T$.
  - Columns (and rows) form an orthonormal basis.
  - $\det(A) = \pm 1$.

### 1.2 Matrix Multiplication Properties
- Non-commutative in general: $AB \neq BA$.
- Associative: $A(BC) = (AB)C$.
- Distributive: $A(B + C) = AB + AC$.
- Transpose of product (Reversal Rule): $(AB)^T = B^T A^T$.
- Transpose of sum: $(A + B)^T = A^T + B^T$.

### 1.3 Trace of a Matrix
For an $n \times n$ matrix $A$, $\text{Trace}(A) = \sum_{i=1}^n a_{ii}$ (sum of main diagonal entries).
- $\text{Trace}(A + B) = \text{Trace}(A) + \text{Trace}(B)$.
- $\text{Trace}(c A) = c \cdot \text{Trace}(A)$.
- **Cyclic Invariance:** $\text{Trace}(AB) = \text{Trace}(BA)$ (even if $AB \neq BA$!).
- Consequently: $\text{Trace}(AB - BA) = 0$.
- $\text{Trace}(A) = \sum_{i=1}^n \lambda_i$ (sum of eigenvalues).

---

## 2. Determinants & Shortcut Theorems

### 2.1 Fundamental Properties (for $n \times n$ matrices)
1. **Scalar Multiplication:** $\det(k A) = k^n \det(A)$.
2. **Product Rule:** $\det(AB) = \det(A) \cdot \det(B) = \det(BA)$.
3. **Powers:** $\det(A^k) = (\det(A))^k$ for any positive integer $k$.
4. **Transposition:** $\det(A^T) = \det(A)$.
5. **Inverse:** $\det(A^{-1}) = \frac{1}{\det(A)}$ (provided $\det(A) \neq 0$).
6. **Triangular / Diagonal Matrix:** Determinant is the product of its diagonal elements:
   $$\det(A) = \prod_{i=1}^n a_{ii}$$
7. **Additive Non-Linearity:** In general, $\det(A + B) \neq \det(A) + \det(B)$!

### 2.2 Row/Column Operation Effects on Determinants
- Swapping any two rows (or columns) multiplies the determinant by $-1$.
- Multiplying a single row (or column) by scalar $c$ multiplies the determinant by $c$.
- Adding a scalar multiple of one row to another ($R_i \leftarrow R_i + c R_j$) **leaves the determinant unchanged**.

### 2.3 Block Matrix Determinants
For partitioned block matrices where diagonal blocks $A$ and $B$ are square:
$$\det \begin{pmatrix} A & C \\ 0 & B \end{pmatrix} = \det \begin{pmatrix} A & 0 \\ C & B \end{pmatrix} = \det(A) \cdot \det(B)$$
If $A$ is invertible, the **Schur Complement** formula gives:
$$\det \begin{pmatrix} A & B \\ C & D \end{pmatrix} = \det(A) \cdot \det(D - C A^{-1} B)$$

---

## 3. Adjoint & Inverse Theorems

### 3.1 Fundamental Adjoint Identity
For any $n \times n$ matrix $A$:
$$A \cdot \text{adj}(A) = \text{adj}(A) \cdot A = \det(A) \cdot I_n$$

### 3.2 High-Yield Adjoint Formulas
1. $|\text{adj}(A)| = |A|^{n-1}$
2. $|\text{adj}(\text{adj}(A))| = |A|^{(n-1)^2}$
3. $\text{adj}(\text{adj}(A)) = |A|^{n-2} A$
4. $\text{adj}(AB) = \text{adj}(B) \cdot \text{adj}(A)$ (Reversal rule)
5. $\text{adj}(A^T) = (\text{adj}(A))^T$
6. $\text{adj}(k A) = k^{n-1} \text{adj}(A)$

### 3.3 Matrix Inverse
A matrix $A$ is invertible (non-singular) if and only if $\det(A) \neq 0$.
$$A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$$
- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1} A^{-1}$
- $(A^T)^{-1} = (A^{-1})^T$
- $(k A)^{-1} = \frac{1}{k} A^{-1}$ ($k \neq 0$)

---

## 4. Matrix Rank & Fundamental Subspaces

### 4.1 Definitions
- **Rank of $A$ ($r$):** The maximum number of linearly independent rows (or columns) in $A$.
- **Row Rank = Column Rank = $\text{Rank}(A)$**.
- For an $m \times n$ matrix: $0 \le \text{Rank}(A) \le \min(m, n)$.
- **Full Row Rank:** $\text{Rank}(A) = m$.
- **Full Column Rank:** $\text{Rank}(A) = n$.
- **Full Rank:** $\text{Rank}(A) = \min(m, n)$.

### 4.2 The Rank-Nullity Theorem (Dimension Theorem)
For any matrix $A \in \mathbb{R}^{m \times n}$:
$$\text{Rank}(A) + \text{Nullity}(A) = n \quad (\text{number of columns / domain dimension})$$
- $\text{Nullity}(A) = \dim(\text{Null}(A)) =$ number of free variables in $Ax = 0$.

### 4.3 Fundamental Rank Inequalities
1. **Sum:** $\text{Rank}(A + B) \le \text{Rank}(A) + \text{Rank}(B)$
2. **Product:** $\text{Rank}(AB) \le \min(\text{Rank}(A), \text{Rank}(B))$
3. **Sylvester's Inequality:** For $A_{m \times n}$ and $B_{n \times p}$:
   $$\text{Rank}(AB) \ge \text{Rank}(A) + \text{Rank}(B) - n$$
4. **Invertible Multiplier:** If $P$ and $Q$ are invertible, $\text{Rank}(P A Q) = \text{Rank}(A)$.
5. **Outer Product (Rank 1):** For non-zero vectors $u \in \mathbb{R}^m, v \in \mathbb{R}^n$:
   $$\text{Rank}(u v^T) = 1, \quad \text{Nullity}(u v^T) = n - 1$$
6. **Transpose Products (Crucial for DA):** For any real matrix $A$:
   $$\text{Rank}(A^T A) = \text{Rank}(A A^T) = \text{Rank}(A) = \text{Rank}(A^T)$$
   $$\text{Null}(A^T A) = \text{Null}(A)$$

### 4.4 The Four Fundamental Subspaces (Strang's Big Picture)
For $A \in \mathbb{R}^{m \times n}$ with $\text{Rank}(A) = r$:
| Subspace | Notation | Lives in | Dimension | Orthogonal Complement |
| :--- | :--- | :--- | :--- | :--- |
| **Column Space** | $\text{Col}(A)$ | $\mathbb{R}^m$ | $r$ | $\text{Null}(A^T)$ (Left Nullspace) |
| **Row Space** | $\text{Row}(A) = \text{Col}(A^T)$ | $\mathbb{R}^n$ | $r$ | $\text{Null}(A)$ (Nullspace) |
| **Nullspace** | $\text{Null}(A)$ | $\mathbb{R}^n$ | $n - r$ | $\text{Row}(A)$ |
| **Left Nullspace**| $\text{Null}(A^T)$ | $\mathbb{R}^m$ | $m - r$ | $\text{Col}(A)$ |

---

## 5. Systems of Linear Equations ($Ax = b$)

### 5.1 The Rouché-Capelli Consistency Theorem
Let $[A | b]$ denote the augmented matrix for $m$ equations in $n$ unknowns.

```
Is Rank(A) == Rank([A | b])?
  ├── NO  ──> INCONSISTENT: NO SOLUTION (Parallel hyperplanes)
  └── YES ──> CONSISTENT
               ├── Rank(A) == n ──> UNIQUE SOLUTION (Full column rank, 0 free variables)
               └── Rank(A) < n  ──> INFINITELY MANY SOLUTIONS (n - r free variables)
```

### 5.2 Homogeneous Systems ($Ax = 0$)
- Always consistent because $x = 0$ is always a solution (the **trivial solution**).
- $\text{Rank}(A) = n \iff \det(A) \neq 0 \iff$ **Only trivial solution** ($x = 0$).
- $\text{Rank}(A) < n \iff \det(A) = 0 \iff$ **Infinitely many non-trivial solutions**.
- If $m < n$ (more unknowns than equations), non-trivial solutions **always exist**.

---

## 6. LU Decomposition & Gaussian Elimination

### 6.1 LU Factorization ($A = LU$)
- $L$: Lower triangular matrix with 1s on the main diagonal (unit lower triangular).
- $U$: Upper triangular matrix (identical to the echelon matrix after forward Gaussian elimination).
- **Existence Condition:** $A = LU$ (without row exchanges) exists and is unique if and only if **all leading principal minors** $\det(A_k) \neq 0$ for $k = 1, \dots, n-1$.
- If row exchanges are needed: $P A = L U$, where $P$ is a permutation matrix.
- **Determinant Shortcut:** $\det(A) = \det(L) \det(U) = (1) \times \prod_{i=1}^n u_{ii} = \prod_{i=1}^n u_{ii}$.

---

## 7. Eigenvalues & Eigenvectors

### 7.1 Definitions
For a square matrix $A \in \mathbb{R}^{n \times n}$, a non-zero vector $v \neq 0$ is an **eigenvector** with corresponding **eigenvalue** $\lambda$ if:
$$A v = \lambda v \iff (A - \lambda I) v = 0$$
- **Characteristic Equation:** $\det(A - \lambda I) = 0$.
- Degree of characteristic polynomial $= n$. Thus, there are $n$ eigenvalues (counting multiplicity).

### 7.2 The 4 Golden Eigenvalue Laws
1. **Sum of Eigenvalues:** $\sum_{i=1}^n \lambda_i = \text{Trace}(A)$.
2. **Product of Eigenvalues:** $\prod_{i=1}^n \lambda_i = \det(A)$.
3. **Eigenvalues of Powers:** If $\lambda$ is an eigenvalue of $A$, then $\lambda^k$ is an eigenvalue of $A^k$.
4. **Eigenvalues of Inverse:** If $A$ is invertible, $1/\lambda$ is an eigenvalue of $A^{-1}$.
5. **Polynomial Mapping:** An eigenvalue of polynomial $P(A)$ is $P(\lambda)$.
6. **Triangular / Diagonal Matrix:** Eigenvalues are simply the **diagonal entries**!

### 7.3 Multiplicities
- **Algebraic Multiplicity (AM):** Number of times $\lambda$ appears as a root of $\det(A - \lambda I) = 0$.
- **Geometric Multiplicity (GM):** Dimension of the eigenspace $= \text{Nullity}(A - \lambda I) = n - \text{Rank}(A - \lambda I)$.
- **Fundamental Bound:** $1 \le GM(\lambda) \le AM(\lambda)$ for every eigenvalue.

---

## 8. Cayley-Hamilton Theorem & Matrix Powers

### 8.1 Theorem Statement
Every square matrix satisfies its own characteristic equation:
$$\text{If } p(\lambda) = \det(A - \lambda I) = (-1)^n \left[\lambda^n - c_{n-1} \lambda^{n-1} - \dots - c_0\right] = 0$$
$$\text{Then } A^n - c_{n-1} A^{n-1} - \dots - c_0 I = 0$$

### 8.2 Applications
1. **Computing High Powers ($A^m$):** Divide $\lambda^m$ by the characteristic polynomial $p(\lambda)$:
   $$\lambda^m = q(\lambda) p(\lambda) + r(\lambda) \implies A^m = r(A)$$
2. **Computing Matrix Inverse ($A^{-1}$):**
   $$A^n + c_{n-1} A^{n-1} + \dots + c_0 I = 0 \implies A^{-1} = -\frac{1}{c_0} \left(A^{n-1} + c_{n-1} A^{n-2} + \dots + c_1 I\right)$$

---

## 9. Diagonalization & Spectral Theorem

### 9.1 Diagonalizability Criterion
A matrix $A \in \mathbb{R}^{n \times n}$ is diagonalizable ($A = P D P^{-1}$) if and only if it has **$n$ linearly independent eigenvectors**.
- **Sufficient Condition:** If $A$ has $n$ **distinct** eigenvalues, $A$ is guaranteed to be diagonalizable.
- **Necessary & Sufficient Condition:** $GM(\lambda) = AM(\lambda)$ for every eigenvalue $\lambda$.
- A matrix with $GM < AM$ for some eigenvalue is called **defective** (cannot be diagonalized).

### 9.2 The Spectral Theorem (Real Symmetric Matrices)
If $A$ is a real symmetric matrix ($A^T = A$):
1. All eigenvalues of $A$ are **strictly real numbers**.
2. Eigenvectors corresponding to distinct eigenvalues are **mutually orthogonal**.
3. $A$ is **always diagonalizable**, even with repeated eigenvalues:
   $$A = Q \Lambda Q^T \quad (Q \text{ is orthogonal, } Q^T Q = I)$$

---

## 10. Vector Spaces, Subspaces, Basis & Dimension

### 10.1 Subspace Test
A non-empty subset $W \subseteq V$ is a subspace of vector space $V$ if and only if:
1. $0 \in W$ (contains zero vector).
2. For all $u, v \in W$, $u + v \in W$ (closed under addition).
3. For all $c \in \mathbb{R}, u \in W$, $c u \in W$ (closed under scalar multiplication).

### 10.2 Linear Independence & Basis
- Vectors $\{v_1, \dots, v_k\}$ are **linearly independent** if $c_1 v_1 + \dots + c_k v_k = 0 \implies c_1 = \dots = c_k = 0$.
- **Basis:** A linearly independent set that spans the space.
- **Dimension:** Number of vectors in any basis of the space.
- Any set of $> n$ vectors in $\mathbb{R}^n$ is **linearly dependent**.
- Dimension of space of $n \times n$ symmetric matrices: $\frac{n(n+1)}{2}$.
- Dimension of space of $n \times n$ skew-symmetric matrices: $\frac{n(n-1)}{2}$.

---

## 11. Orthogonality, Gram-Schmidt & Projections

### 11.1 Orthogonal Vectors & Complement
- Two vectors are orthogonal if $u \cdot v = u^T v = 0$.
- **Orthogonal Complement ($W^\perp$):** Set of all vectors orthogonal to every vector in $W$.
  $$\dim(W) + \dim(W^\perp) = n \quad (\text{for } W \subseteq \mathbb{R}^n)$$

### 11.2 Orthogonal Projection Matrix
The orthogonal projection of vector $b$ onto the column space of $A$ (full column rank $n$):
$$P = A (A^T A)^{-1} A^T$$
- $P^2 = P$ (Idempotent).
- $P^T = P$ (Symmetric).
- The projection of $b$ is $p = P b$. The error vector $e = (I - P)b$ is orthogonal to $\text{Col}(A)$.

---

## 12. Special Matrices

| Matrix Type | Algebraic Definition | Eigenvalue Properties | Other Properties |
| :--- | :--- | :--- | :--- |
| **Idempotent** | $P^2 = P$ | $\lambda \in \{0, 1\}$ | $\text{Trace}(P) = \text{Rank}(P)$; $I - P$ is also idempotent |
| **Nilpotent** | $N^k = 0$ ($k \in \mathbb{N}$) | All $\lambda = 0$ | $\det(N) = 0$, $\text{Trace}(N) = 0$; never invertible ($N \neq 0$) |
| **Involutory** | $A^2 = I$ | $\lambda \in \{1, -1\}$ | $A^{-1} = A$; $\det(A) = \pm 1$ |
| **Orthogonal** | $Q^T Q = I$ | $|\lambda| = 1$ (complex modulus) | $Q^{-1} = Q^T$; preserves Euclidean lengths and angles |
| **Positive Definite** | $x^T A x > 0$ ($\forall x \neq 0$) | All $\lambda_i > 0$ | All leading principal minors $> 0$; invertible |

---

## 13. Quadratic Forms & Positive Definiteness

### 13.1 Quadratic Form Expression
$Q(x) = x^T A x = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j$ (where $A$ is symmetric).

### 13.2 Definiteness Classifications
- **Positive Definite (PD):** $x^T A x > 0$ for all $x \neq 0 \iff$ All eigenvalues $\lambda_i > 0$.
  - **Sylvester's Criterion:** All leading principal minors are strictly positive ($D_1 > 0, D_2 > 0, \dots, D_n > 0$).
  - Can be factored as $A = L L^T = P^T P$ with invertible $P$ (**Cholesky Factorization**).
- **Positive Semi-Definite (PSD):** $x^T A x \ge 0$ for all $x \iff$ All eigenvalues $\lambda_i \ge 0$.
  - Gram matrix $A^T A$ is **always PSD** for any matrix $A$.
- **Negative Definite (ND):** $x^T A x < 0$ for all $x \neq 0 \iff$ All eigenvalues $\lambda_i < 0$.
  - Leading principal minors alternate in sign: $D_1 < 0, D_2 > 0, D_3 < 0, \dots$
- **Indefinite:** Takes both positive and negative values $\iff$ Has both positive and negative eigenvalues.

---

## 14. Singular Value Decomposition (SVD) & Matrix Norms

### 14.1 SVD Formulation
For any real matrix $A \in \mathbb{R}^{m \times n}$ with $\text{Rank}(A) = r$:
$$A = U \Sigma V^T$$
- $U \in \mathbb{R}^{m \times m}$: Orthogonal matrix ($U^T U = I_m$). Columns are eigenvectors of $A A^T$ (Left singular vectors).
- $V \in \mathbb{R}^{n \times n}$: Orthogonal matrix ($V^T V = I_n$). Columns are eigenvectors of $A^T A$ (Right singular vectors).
- $\Sigma \in \mathbb{R}^{m \times n}$: Diagonal matrix with non-negative entries:
  $$\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0, \quad \sigma_{r+1} = \dots = 0$$
- **Fundamental Identity:** $\sigma_i = \sqrt{\lambda_i(A^T A)} = \sqrt{\lambda_i(A A^T)}$.
- Singular values are **ALWAYS real and non-negative** ($\sigma_i \ge 0$), even if eigenvalues are negative or complex!

### 14.2 Matrix Norms in SVD
1. **Spectral Norm (2-norm):**
   $$\|A\|_2 = \sigma_{\max} = \sigma_1$$
2. **Frobenius Norm:**
   $$\|A\|_F = \sqrt{\sum_{i,j} a_{ij}^2} = \sqrt{\text{Trace}(A^T A)} = \sqrt{\sum_{i=1}^r \sigma_i^2}$$
3. **Nuclear Norm (Trace Norm):**
   $$\|A\|_* = \sum_{i=1}^r \sigma_i$$
4. **Condition Number (2-norm):**
   $$\kappa_2(A) = \|A\|_2 \|A^{-1}\|_2 = \frac{\sigma_{\max}}{\sigma_{\min}} = \frac{\sigma_1}{\sigma_n}$$

### 14.3 Low-Rank Approximation (Eckart-Young-Mirsky Theorem)
The optimal rank-$k$ approximation ($k < r$) that minimizes $\|A - A_k\|_2$ and $\|A - A_k\|_F$ is obtained by truncating the SVD:
$$A_k = \sum_{i=1}^k \sigma_i u_i v_i^T$$
- Reconstruction error in 2-norm: $\|A - A_k\|_2 = \sigma_{k+1}$.

---

## 15. GATE Trap Alert Checklist

| Trap # | Common Student Fallacy | Correct Mathematical Reality |
| :--- | :--- | :--- |
| **Trap 1** | $\det(A + B) = \det(A) + \det(B)$ | **FALSE.** Determinant is multilinear by row/column, NOT additive over matrices. |
| **Trap 2** | $\text{Rank}(AB) = \text{Rank}(A) \cdot \text{Rank}(B)$ | **FALSE.** Multiplication can only preserve or drop rank: $\text{Rank}(AB) \le \min(\text{Rank}(A), \text{Rank}(B))$. |
| **Trap 3** | Invertible means Diagonalizable | **FALSE.** Completely independent! $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ is invertible ($\det=1$), but defective (not diagonalizable). |
| **Trap 4** | Singular values can be negative | **FALSE.** Singular values are strictly non-negative: $\sigma_i = \sqrt{\lambda_i(A^T A)} \ge 0$. |
| **Trap 5** | $\text{Rank}(A) + \text{Nullity}(A) = m$ | **FALSE.** It is ALWAYS $n$ (the column count / domain dimension)! |
| **Trap 6** | $Ax = 0$ can have "No Solution" | **FALSE.** Homogeneous systems always have at least the trivial solution $x = 0$. |
| **Trap 7** | $\det(A) > 0 \implies A$ is Positive Definite | **FALSE for $n \ge 3$.** A $3 \times 3$ matrix with eigenvalues $(-1, -1, 4)$ has $\det = 4 > 0$, but is NOT positive definite! |
