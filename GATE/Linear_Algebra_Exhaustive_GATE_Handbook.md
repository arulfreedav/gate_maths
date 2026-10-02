# GATE Linear Algebra Exhaustive Theory & Formula Handbook
## Complete Reference for GATE CS (Section 1) & GATE DA (Section 2)
### With "WHEN TO USE" Decision Rules, Remarks, Shortcuts & Traps

---

## 1. Special Matrix Types & Algebraic Properties

### 1.1 Symmetric & Skew-Symmetric Matrices
Let $A \in \mathbb{R}^{n \times n}$.
- **Symmetric Matrix:** $A^T = A$ ($a_{ij} = a_{ji}$).
  - All eigenvalues are strictly **REAL**.
  - Always diagonalizable via an orthogonal matrix: $A = Q \Lambda Q^T$.
  - Dimension of vector space of $n \times n$ symmetric matrices: $\frac{n(n+1)}{2}$.
- **Skew-Symmetric Matrix:** $A^T = -A$ ($a_{ij} = -a_{ji}$).
  - All main diagonal elements are identically zero ($a_{ii} = 0$).
  - All eigenvalues are **zero or purely imaginary** ($\lambda = 0$ or $\pm i\beta$).
  - For **odd order $n$**, $\det(A) = 0$ (always singular / non-invertible).
  - Dimension of vector space of $n \times n$ skew-symmetric matrices: $\frac{n(n-1)}{2}$.

> **WHEN TO USE:**
> Whenever a GATE question asks about the invertibility of a skew-symmetric matrix, immediately check order $n$. If $n$ is odd (e.g., $3 \times 3, 5 \times 5$), $\det(A) = 0$ without calculation. If given any square matrix $M$, recall that $M + M^T$ is symmetric, and $M - M^T$ is skew-symmetric.

> **GATE TRAP ALERT:**
> Skew-symmetric matrices of *even* order ($2 \times 2, 4 \times 4$) CAN have non-zero positive determinants! Example: $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ has determinant $+1$.

---

### 1.2 Orthogonal Matrices
$$Q^T Q = Q Q^T = I_n \iff Q^{-1} = Q^T$$
- **Determinant:** $\det(Q) = \pm 1$.
- **Eigenvalues:** All eigenvalues lie on the unit circle in the complex plane: $|\lambda| = 1$.
- **Length & Inner Product Preservation:** $\|Q x\|_2 = \|x\|_2$ and $(Qx)^T (Qy) = x^T y$.
- Columns and rows form an orthonormal basis of $\mathbb{R}^n$.
- Product of two orthogonal matrices is orthogonal.

> **WHEN TO USE:**
> When asked to invert an orthogonal matrix, simply transpose: $Q^{-1} = Q^T$. When asked for the condition number in $L_2$ norm: $\kappa_2(Q) = 1$ (perfect numerical stability).

---

### 1.3 Idempotent (Projection) & Nilpotent Matrices
| Matrix Type | Defining Identity | Eigenvalues ($\lambda$) | Key Theorems & Properties |
| :--- | :--- | :--- | :--- |
| **Idempotent** | $P^2 = P$ | $\lambda \in \{0, 1\}$ | $\mathbf{\text{Trace}(P) = \text{Rank}(P)}$; $(I - P)$ is idempotent; if $P \neq I$, then $\det(P) = 0$ |
| **Nilpotent** | $N^k = 0$ ($k \in \mathbb{N}$) | All $\lambda_i = 0$ | $\det(N) = 0$, $\text{Trace}(N) = 0$; non-zero nilpotent matrix is *never* diagonalizable |
| **Involutory** | $A^2 = I$ | $\lambda \in \{1, -1\}$ | $A^{-1} = A$; $\det(A) = \pm 1$ |

> **WHEN TO USE:**
> In GATE DA questions on Least Squares Regression and Projection matrices ($P = X(X^T X)^{-1} X^T$). Because $P^2 = P$, immediately use $\text{Trace}(P) = \text{Rank}(P)$.

---

## 2. Determinants, Inverses & Adjoints

### 2.1 Master Adjoint & Determinant Formulas
For any $n \times n$ matrix $A$:
$$A \cdot \text{adj}(A) = \text{adj}(A) \cdot A = \det(A) \cdot I_n$$

| Quantity / Operation | Exact Formula | When to Use in GATE |
| :--- | :--- | :--- |
| **Determinant of Adjoint** | $|\text{adj}(A)| = |A|^{n-1}$ | Calculating determinant of adjoint given order $n$ and $|A|$ |
| **Double Adjoint Determinant** | $|\text{adj}(\text{adj}(A))| = |A|^{(n-1)^2}$ | High-frequency 2-mark formula in CS & DA |
| **Double Adjoint Matrix** | $\text{adj}(\text{adj}(A)) = |A|^{n-2} A$ | Expressing double adjoint as a multiple of $A$ |
| **Scalar Multiple Determinant** | $\det(k A) = k^n \det(A)$ | Pulling a scalar constant out of an $n \times n$ determinant |
| **Scalar Multiple Adjoint** | $\text{adj}(k A) = k^{n-1} \text{adj}(A)$ | Simplifying adjoints with scalar multipliers |
| **Inverse Formula** | $A^{-1} = \frac{1}{|A|} \text{adj}(A)$ | Matrix inversion when $|A| \neq 0$ |
| **Product Determinant** | $\det(AB) = \det(A) \det(B) = \det(BA)$ | Evaluating product determinants even if $AB \neq BA$ |
| **Inverse Determinant** | $\det(A^{-1}) = \frac{1}{\det(A)}$ | Inverting determinants |

> **10-SECOND SHORTCUT FOR $2 \times 2$ ADJOINT & INVERSE:**
> For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
> $$\text{adj}(A) = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \quad (\text{Swap diagonal elements, negate off-diagonal elements})$$
> $$A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

> **GATE TRAP ALERT:**
> Forgetting the power $n$ in scalar multiplication! $\det(2A) \neq 2\det(A)$. For a $3 \times 3$ matrix, $\det(2A) = 2^3 \det(A) = 8\det(A)$. For a $4 \times 4$ matrix, $\det(-A) = (-1)^4 \det(A) = \det(A)$.

---

### 2.2 Block Matrix Determinants (Schur Complement)
For block triangular matrices where diagonal blocks $A$ and $B$ are square:
$$\det \begin{pmatrix} A & C \\ 0 & B \end{pmatrix} = \det \begin{pmatrix} A & 0 \\ C & B \end{pmatrix} = \det(A) \cdot \det(B)$$
If $A$ is invertible, the general $2 \times 2$ block determinant is:
$$\det \begin{pmatrix} A & B \\ C & D \end{pmatrix} = \det(A) \cdot \det(D - C A^{-1} B)$$

> **WHEN TO USE:**
> In GATE DA for covariance matrices of partitioned random vectors, and in CS for divide-and-conquer recurrences.

---

## 3. Matrix Rank, Nullity & Subspaces

### 3.1 The Rank-Nullity Theorem (Dimension Theorem)
$$\text{Rank}(A) + \text{Nullity}(A) = n \quad (\text{Number of Columns / Domain Dimension})$$
- $\text{Rank}(A) = \dim(\text{Col}(A)) = \dim(\text{Row}(A))$.
- $\text{Nullity}(A) = \dim(\text{Null}(A)) =$ Number of free variables in $Ax = 0$.
- For $A \in \mathbb{R}^{m \times n}$: $\text{Rank}(A) \le \min(m, n)$.

> **WHEN TO USE:**
> Whenever given the dimension of the null space or asked for the number of linearly independent solutions to $Ax = 0$.

> **GATE TRAP ALERT:**
> Students often mistakenly write $\text{Rank} + \text{Nullity} = m$. It is ALWAYS $n$ (the column count / domain dimension), regardless of the number of rows $m$!

---

### 3.2 Rank Inequalities & Transpose Products
| Theorem / Identity | Mathematical Statement | Exam Significance |
| :--- | :--- | :--- |
| **Rank of Sum** | $\text{Rank}(A + B) \le \text{Rank}(A) + \text{Rank}(B)$ | Upper bound on combined matrix rank |
| **Rank of Product** | $\text{Rank}(AB) \le \min(\text{Rank}(A), \text{Rank}(B))$ | Multiplication can only preserve or drop rank |
| **Sylvester's Inequality** | $\text{Rank}(AB) \ge \text{Rank}(A) + \text{Rank}(B) - n$ | Lower bound on product rank ($n$ = inner cols) |
| **Outer Product Rank** | $\text{Rank}(u v^T) = 1$ ($u, v \neq 0$) | Always 1 for non-zero vectors. Nullity is $n - 1$ |
| **Gram Matrix Rank** | $\text{Rank}(A^T A) = \text{Rank}(A A^T) = \text{Rank}(A)$ | Central theorem in DA for Normal Equations |
| **Gram Matrix Nullspace**| $\text{Null}(A^T A) = \text{Null}(A)$ | $A^T A$ is invertible $\iff A$ has full column rank |

---

## 4. Systems of Linear Equations ($Ax = b$)

### 4.1 Rouché-Capelli Consistency Criteria
Form the augmented matrix $[A | b]$ where $A$ is $m \times n$ ($n$ = number of unknowns):

| Rank Condition | Consistency | Number of Solutions | Geometric Meaning |
| :--- | :--- | :--- | :--- |
| $\text{Rank}(A) < \text{Rank}([A \| b])$ | **Inconsistent** | **NO SOLUTION (0)** | Parallel or non-intersecting planes |
| $\text{Rank}(A) = \text{Rank}([A \| b]) = n$ | **Consistent** | **UNIQUE SOLUTION (1)** | Intersect at a single point |
| $\text{Rank}(A) = \text{Rank}([A \| b]) = r < n$ | **Consistent** | **INFINITELY MANY** | Intersect along line/subspace ($n - r$ free vars) |

> **WHEN TO USE FOR PARAMETER PROBLEMS (find $k$ for infinite / no / unique solution):**
> 1. Set up the augmented matrix $[A | b]$.
> 2. Perform elementary row operations to reduce to row-echelon form.
> 3. Inspect the final equation row $(0 \quad 0 \quad f(k) \mid g(k))$:
>    - **No solution:** $f(k) = 0$ AND $g(k) \neq 0$ ($0 = \text{non-zero}$).
>    - **Infinitely many:** $f(k) = 0$ AND $g(k) = 0$ (entire row is zero).
>    - **Unique solution:** $f(k) \neq 0$ (pivot exists for every variable).

---

### 4.2 Homogeneous Systems ($Ax = 0$)
- Always consistent because $x = 0$ is always a solution (the **trivial solution**).
- $\text{Rank}(A) = n \iff \det(A) \neq 0 \iff$ **Only trivial solution** ($x = 0$).
- $\text{Rank}(A) < n \iff \det(A) = 0 \iff$ **Infinitely many non-trivial solutions**.
- If $m < n$ (more unknowns than equations), non-trivial solutions **always exist**.

---

## 5. LU Decomposition & Gaussian Elimination

### 5.1 Doolittle LU Factorization ($A = LU$)
$$A = \begin{pmatrix} 1 & 0 & 0 \\ l_{21} & 1 & 0 \\ l_{31} & l_{32} & 1 \end{pmatrix} \begin{pmatrix} u_{11} & u_{12} & u_{13} \\ 0 & u_{22} & u_{23} \\ 0 & 0 & u_{33} \end{pmatrix}$$
- $L$ is unit lower triangular (1s on the main diagonal).
- $U$ is upper triangular (identical to the echelon matrix after Gaussian elimination).
- **Multiplier Rule:** $l_{ij} = \frac{\text{element to eliminate}}{\text{pivot element}}$.
- **Existence Theorem:** $A = LU$ without pivoting exists and is unique if and only if **all leading principal minors** are non-zero:
  $$\det(A_k) \neq 0 \quad \text{for } k = 1, 2, \dots, n-1$$
- **Determinant Shortcut:** $\det(A) = \det(L) \det(U) = (1) \times \prod u_{ii} = \prod_{i=1}^n u_{ii}$.

---

## 6. Eigenvalues, Eigenvectors & Cayley-Hamilton

### 6.1 The 4 Golden Eigenvalue Laws
| Property | Mathematical Formula | Fast Inspection Shortcut |
| :--- | :--- | :--- |
| **Sum of Eigenvalues** | $\sum_{i=1}^n \lambda_i = \text{Trace}(A) = \sum a_{ii}$ | Instantly eliminates incorrect options |
| **Product of Eigenvalues**| $\prod_{i=1}^n \lambda_i = \det(A)$ | If $\det(A) = 0$, at least one $\lambda = 0$ |
| **Triangular Matrix** | $\lambda_i = a_{ii}$ | Eigenvalues are directly the diagonal entries! |
| **Powers of Matrix** | $\text{Eigenvalues of } A^k = \lambda_i^k$ | Same eigenvectors $v_i$ |
| **Inverse Matrix** | $\text{Eigenvalues of } A^{-1} = 1/\lambda_i$ | Provided $\lambda_i \neq 0$. Same eigenvectors |
| **Polynomial Mapping** | $\text{Eigenvalues of } P(A) = P(\lambda_i)$ | If $A$ has $\lambda$, then $A^2 - 3A + 2I$ has $\lambda^2 - 3\lambda + 2$ |

> **15-SECOND SHORTCUT FOR $2 \times 2$ CHARACTERISTIC EQUATION:**
> $$\lambda^2 - \text{Trace}(A) \lambda + \det(A) = 0$$
> Never expand $\det(A - \lambda I)$ element-by-element for $2 \times 2$!

---

### 6.2 Cayley-Hamilton Theorem
Every square matrix satisfies its own characteristic equation: $p(A) = 0$.
- **Finding $A^{-1}$:** If $\lambda^2 - 4\lambda - 5 = 0$:
  $$A^2 - 4A - 5I = 0 \implies 5I = A(A - 4I) \implies A^{-1} = \frac{1}{5}(A - 4I)$$
- **Finding High Powers ($A^m$):**
  $$\lambda^m = q(\lambda) p(\lambda) + r(\lambda) \implies A^m = r(A)$$

---

### 6.3 Diagonalization & Multiplicities
- **Algebraic Multiplicity (AM):** Multiplicity of $\lambda$ as a root of $\det(A - \lambda I) = 0$.
- **Geometric Multiplicity (GM):** $\dim(\text{Null}(A - \lambda I)) = n - \text{Rank}(A - \lambda I)$ (number of independent eigenvectors).
- **Fundamental Inequality:** $1 \le GM(\lambda) \le AM(\lambda)$.
- **Diagonalizability Criterion:** $A$ is diagonalizable $\iff GM(\lambda) = AM(\lambda)$ for every eigenvalue.
- **Sufficient Condition:** If $A$ has $n$ distinct eigenvalues, $A$ is **guaranteed** to be diagonalizable.
- **Spectral Theorem:** Real symmetric matrices are **always orthogonally diagonalizable**: $A = Q \Lambda Q^T$ with $Q^T Q = I$.

---

## 7. Singular Value Decomposition (SVD) & Quadratic Forms (GATE DA Core)

### 7.1 SVD Formulation ($A = U \Sigma V^T$)
$$A_{m \times n} = U_{m \times m} \Sigma_{m \times n} V^T_{n \times n}$$
- $U$: Orthogonal matrix of Left Singular Vectors (eigenvectors of $A A^T$).
- $V$: Orthogonal matrix of Right Singular Vectors (eigenvectors of $A^T A$).
- $\Sigma$: Diagonal matrix of singular values: $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$.
- **Master Formula:**
  $$\sigma_i = \sqrt{\lambda_i(A^T A)} = \sqrt{\lambda_i(A A^T)} \ge 0$$
- Singular values are **ALWAYS non-negative real numbers** ($\sigma_i \ge 0$).

| Quantity | Formula in Singular Values | Exam Significance |
| :--- | :--- | :--- |
| **Rank of $A$** | $r = \text{Count of positive } \sigma_i > 0$ | Rank equals non-zero singular value count |
| **Spectral Norm (2-norm)** | $\|A\|_2 = \sigma_{\max} = \sigma_1$ | Maximum vector amplification factor |
| **Frobenius Norm** | $\|A\|_F = \sqrt{\sum \sigma_i^2} = \sqrt{\text{Trace}(A^T A)}$ | Root-mean-square magnitude of all elements |
| **Condition Number** | $\kappa_2(A) = \frac{\sigma_{\max}}{\sigma_{\min}} = \frac{\sigma_1}{\sigma_n}$ | Measures numerical stability |
| **Pseudoinverse** | $A^+ = V \Sigma^+ U^T$ | Minimum-norm Least Squares solution: $\hat{x} = A^+ b$ |

---

### 7.2 Quadratic Forms & Definiteness Tests
For real symmetric matrix $A$: $Q(x) = x^T A x$.

| Classification | Eigenvalue Condition | Sylvester's Criterion (Leading Principal Minors) |
| :--- | :--- | :--- |
| **Positive Definite (PD)** | All $\lambda_i > 0$ | $D_1 > 0, D_2 > 0, D_3 > 0, \dots, D_n > 0$ |
| **Positive Semi-Definite (PSD)** | All $\lambda_i \ge 0$ | All principal minors $\ge 0$ |
| **Negative Definite (ND)** | All $\lambda_i < 0$ | Alternating: $D_1 < 0, D_2 > 0, D_3 < 0, D_4 > 0, \dots$ |
| **Indefinite** | Both positive & negative $\lambda$ | Fails both PD and ND tests (saddle point) |

---

## 8. Master When-To-Use Quick Reference Table

| GATE Problem Pattern | Instant Formula / Decision Rule | Time Target |
| :--- | :--- | :--- |
| Given $3 \times 3$ trace and det, find missing $\lambda$ | $\sum \lambda_i = \text{Trace}(A)$ and $\prod \lambda_i = \det(A)$ | 15s |
| Evaluate $|\text{adj}(A)|$ or $|\text{adj}(\text{adj}(A))|$ | $|A|^{n-1}$ or $|A|^{(n-1)^2}$ | 10s |
| Find parameter $k$ for infinite solutions to $Ax = b$ | Row reduce $[A\|b]$: set bottom row $(0 \dots 0 \mid 0)$ | 45s |
| Rank of outer product $u v^T$ ($u, v \neq 0$) | Always 1 (Nullity $= n - 1$) | 5s |
| Matrix is orthogonal, find inverse or determinant | $Q^{-1} = Q^T$, $\det(Q) = \pm 1$ | 5s |
| Project vector $b$ onto column space of $A$ | $p = A(A^T A)^{-1} A^T b$ | 30s |
| Largest singular value / spectral norm $\|A\|_2$ | $\sigma_1 = \sqrt{\lambda_{\max}(A^T A)}$ | 30s |
| Dimension of symmetric / skew-symmetric space | Symmetric: $\frac{n(n+1)}{2}$, Skew: $\frac{n(n-1)}{2}$ | 5s |
