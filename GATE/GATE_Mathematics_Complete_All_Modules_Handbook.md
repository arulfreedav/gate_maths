# GATE 2027 Complete Mathematics Master Handbook
## All 4 Modules: Theory, Formulas, Decision Rules ("When-To-Use") & Trap Alerts
**Target Exams:** GATE CS (Section 1) & GATE DA (Sections 1, 2, 3)  
**Consolidated Single Reference Edition**

---

## 🧭 Master Quick-Decision Matrix

| If the GATE Question Mentions... | Immediate Concept / Trigger | Exact Formula / Action Rule |
| :--- | :--- | :--- |
| **"System $Ax=b$ has infinitely many solutions"** | Rouché-Capelli Theorem | $\text{Rank}(A) = \text{Rank}([A\|b]) = r < n$. Free variables = $n - r > 0$. $\det(A) = 0$ if square. |
| **"Sum / Product of eigenvalues"** | Trace and Determinant properties | $\sum \lambda_i = \text{Tr}(A)$ and $\prod \lambda_i = \det(A)$. Do not compute characteristic poly! |
| **"Best rank-$k$ approximation / Spectral Norm"** | Singular Value Decomposition (SVD) | $\|A\|_2 = \sigma_1 = \sqrt{\lambda_{\max}(A^T A)}$. Best rank-$k$: $A_k = \sum_{i=1}^k \sigma_i u_i v_i^T$. |
| **"Probability of disease given positive test"** | Bayes' Rule with Total Probability | $P(D\|+) = \frac{P(+\|D)P(D)}{P(+\|D)P(D) + P(+\|D^c)P(D^c)}$. |
| **"Average rate $\lambda$ / Memoryless"** | Poisson (counts) / Exponential (waiting) | Counts: $\text{Poisson}(\lambda t)$. Waiting time: $f(t)=\lambda e^{-\lambda t}$, $P(T > s+t \mid T > s) = P(T > t)$. |
| **"Bound on probability knowing only Mean/Var"** | Markov / Chebyshev Inequalities | $P(X \ge a) \le \frac{E[X]}{a}$ ($X \ge 0$). $P(\|X-\mu\| \ge k\sigma) \le \frac{1}{k^2}$. |
| **"Is this relation a POSET / Lattice?"** | Reflexive, Antisymmetric, Transitive | POSET: Reflexive + Antisymmetric + Transitive. Lattice: Every pair has unique LUB and unique GLB. |
| **"Number of spanning trees in $K_n$"** | Cayley's Tree Formula | $n^{n-2}$ spanning trees. In $K_{m,n}$: $m^{n-1} n^{m-1}$. |
| **"Max planar edges / Colorability"** | Euler's Formula & Planar Bounds | $V - E + R = 2$. If triangle-free: $E \le 2V - 4$. General planar: $E \le 3V - 6$. Four-colorable ($\chi \le 4$). |
| **"Classify stationary point in 2 variables"** | Hessian Determinant & Trace | At $\nabla f = 0$, $D = f_{xx}f_{yy} - (f_{xy})^2$. $D > 0, f_{xx} > 0 \implies \text{Min}$. $D > 0, f_{xx} < 0 \implies \text{Max}$. $D < 0 \implies \text{Saddle}$. |
| **"Constrained optimization with inequalities $g(x) \le 0$"** | Karush-Kuhn-Tucker (KKT) Conditions | Stationarity ($\nabla f + \sum \mu_i \nabla g_i = 0$), Primal ($g_i \le 0$), Dual ($\mu_i \ge 0$), Complementary Slackness ($\mu_i g_i = 0$). |

---

# PART 1: LINEAR ALGEBRA
*(GATE CS Section 1 & GATE DA Section 2)*

### 1.1 Matrices, Determinants, Inverses & Adjoints
- **Determinant Scalings:** For $n \times n$ matrix $A$ and scalar $c$:
  $$\det(cA) = c^n \det(A)$$
  $$\det(AB) = \det(A)\det(B), \quad \det(A^{-1}) = \frac{1}{\det(A)}$$
  $$\det(\text{adj}(A)) = (\det(A))^{n-1}, \quad \text{adj}(\text{adj}(A)) = (\det(A))^{n-2} A$$
- **Skew-Symmetric Determinants:** If $A^T = -A$:
  - When $n$ is **odd**, $\det(A) = 0$.
  - When $n$ is **even**, $\det(A)$ is a non-negative perfect square.
- **When to Use:** Whenever asked for $|c A|$, $|\text{adj}(A)|$, or determinants of powers $A^k$.
- **GATE Trap:** Forgetting the power $n$ when pulling out scalar $c$.

### 1.2 Vector Spaces, Subspaces & Bases
- **Subspace Test:** A subset $W \subseteq V$ is a subspace $\iff \mathbf{0} \in W$ and $W$ is closed under linear combinations ($\alpha u + \beta v \in W$).
- **Quick Rejection Heuristic:** If setting all variables to 0 fails the equation, or if equations contain affine offsets ($x + y = 2$), products ($xy = 0$), or inequalities ($x \ge 0$), it is **NOT** a subspace!
- **Dimension Identities:**
  - $\dim(W_1 + W_2) = \dim(W_1) + \dim(W_2) - \dim(W_1 \cap W_2)$
  - Dimension of symmetric $n \times n$ matrices: $\frac{n(n+1)}{2}$
  - Dimension of skew-symmetric $n \times n$ matrices: $\frac{n(n-1)}{2}$
  - Dimension of trace-zero $n \times n$ matrices: $n^2 - 1$

### 1.3 Rank, Nullity & The 4 Fundamental Subspaces
- **Rank-Nullity Theorem:** For any matrix $A \in \mathbb{R}^{m \times n}$:
  $$\text{Rank}(A) + \text{Nullity}(A) = n \quad (\text{number of columns})$$
- **Orthogonal Subspaces:**
  - $\text{Row}(A) \perp \text{Null}(A)$ in $\mathbb{R}^n$
  - $\text{Col}(A) \perp \text{Null}(A^T)$ in $\mathbb{R}^m$
- **Outer Product Rank Shortcut:** If $u \in \mathbb{R}^{m \times 1}$ and $v \in \mathbb{R}^{n \times 1}$ are non-zero, $A = u v^T$ always has $\text{Rank}(A) = 1$. The only non-zero eigenvalue is $\lambda = v^T u = \text{Tr}(A)$, and all remaining $n-1$ eigenvalues are $0$.

### 1.4 Systems of Linear Equations ($Ax = b$)
- **Rouché-Capelli Theorem:**
  - Inconsistent (No Solution): $\text{Rank}(A) \neq \text{Rank}([A\|b])$
  - Consistent Unique Solution: $\text{Rank}(A) = \text{Rank}([A\|b]) = n$
  - Consistent Infinitely Many Solutions: $\text{Rank}(A) = \text{Rank}([A\|b]) = r < n$ ($n - r$ free variables)
- **Homogeneous Systems ($Ax = 0$):** Always consistent ($\mathbf{0}$ is a solution). Non-trivial solutions exist $\iff \text{Rank}(A) < n \iff \det(A) = 0$ (if square).

### 1.5 Eigenvalues, Eigenvectors & Diagonalizability
- **Trace and Determinant Invariants:**
  $$\sum_{i=1}^n \lambda_i = \text{Tr}(A), \qquad \prod_{i=1}^n \lambda_i = \det(A)$$
- **Constant Row Sum Trick:** If every row sums to $S$, then $\lambda = S$ is guaranteed to be an eigenvalue with eigenvector $\mathbf{v} = [1, 1, \dots, 1]^T$.
- **Diagonalizability Criterion:** $A$ is diagonalizable $\iff \text{GM}(\lambda_i) = \text{AM}(\lambda_i)$ for all eigenvalues, where $\text{GM}(\lambda) = \text{Nullity}(A - \lambda I) = n - \text{Rank}(A - \lambda I)$.
- **Cayley-Hamilton Theorem:** $A$ satisfies its own characteristic equation $p(A) = O$. Used to calculate high powers $A^{50}$ or inverses $A^{-1}$.

### 1.6 Matrix Decompositions (LU, Cholesky, QR, SVD)
- **LU:** $A = LU$. $L$ is unit lower triangular ($l_{ii}=1$), $U$ upper triangular. Requires all leading principal minors $\neq 0$.
- **Cholesky:** $A = L L^T$. Valid only for Symmetric Positive Definite (SPD) matrices. Tested via Sylvester's Criterion (all leading principal minors $> 0$).
- **QR:** $A = QR$. $Q$ has orthonormal columns ($Q^T Q = I$), $R$ upper triangular. Used for Gram-Schmidt & Least Squares.
- **SVD:** $A = U \Sigma V^T$. Valid for any $m \times n$ matrix.
  - Singular values $\sigma_i = \sqrt{\lambda_i(A^T A)} \ge 0$.
  - Rank of $A$ = count of non-zero singular values.
  - Spectral norm: $\|A\|_2 = \sigma_1$.
  - Best rank-$k$ approximation: $A_k = \sum_{i=1}^k \sigma_i u_i v_i^T$ (Eckart-Young Theorem).

---

# PART 2: PROBABILITY & STATISTICS
*(GATE CS Section 1 & GATE DA Section 1)*

### 2.1 Foundational Probability & Bayes' Theorem
- **Axioms:** $0 \le P(A) \le 1$, $P(S) = 1$, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- **Conditional Probability:** $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$.
- **Bayes' Theorem:**
  $$P(B_j \mid A) = \frac{P(A \mid B_j) P(B_j)}{\sum_{i=1}^k P(A \mid B_i) P(B_i)}$$
- **Independence Trap:** Mutually exclusive events with $P(A), P(B) > 0$ are **never** independent ($P(A \cap B) = 0 \neq P(A)P(B)$).

### 2.2 Discrete Random Variables
- **Bernoulli($p$):** $E[X] = p$, $\text{Var}(X) = p(1-p)$.
- **Binomial($n, p$):** $P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}$. $E[X] = np$, $\text{Var}(X) = np(1-p)$.
- **Poisson($\lambda$):** $P(X=k) = \frac{e^{-\lambda}\lambda^k}{k!}$. $E[X] = \lambda$, $\text{Var}(X) = \lambda$. (Mean = Variance).
- **Geometric($p$):** $P(X=k) = (1-p)^{k-1}p$. $E[X] = \frac{1}{p}$, $\text{Var}(X) = \frac{1-p}{p^2}$. Memoryless: $P(X > s+t \mid X > s) = P(X > t)$.
- **Hypergeometric:** Sampling without replacement from finite population $N$ containing $K$ successes.

### 2.3 Continuous Random Variables
- **Uniform $U(a, b)$:** $f(x) = \frac{1}{b-a}$, $E[X] = \frac{a+b}{2}$, $\text{Var}(X) = \frac{(b-a)^2}{12}$.
- **Exponential($\lambda$):** $f(x) = \lambda e^{-\lambda x}$ ($x \ge 0$). $E[X] = \frac{1}{\lambda}$, $\text{Var}(X) = \frac{1}{\lambda^2}$. Memoryless: $P(X > s+t \mid X > s) = e^{-\lambda t}$.
- **Normal $\mathcal{N}(\mu, \sigma^2)$:** Bell-shaped. $Z = \frac{X-\mu}{\sigma} \sim \mathcal{N}(0, 1)$. $68.27\%$ within $\pm 1\sigma$, $95.45\%$ within $\pm 2\sigma$, $99.73\%$ within $\pm 3\sigma$.
- **Chi-Square $\chi^2(k)$:** Sum of $k$ independent squared standard normal variables. $E[X] = k$, $\text{Var}(X) = 2k$.
- **Student's $t(k)$:** $T = \frac{Z}{\sqrt{\chi^2(k)/k}}$. Symmetric, heavier tails than normal, used when sample size is small and $\sigma$ unknown.

### 2.4 Joint Distributions, Covariance & Correlation
- **Marginals:** $f_X(x) = \int f_{X,Y}(x,y) dy$.
- **Independence:** $f_{X,Y}(x,y) = f_X(x)f_Y(y) \iff X \perp Y$.
- **Covariance:** $\text{Cov}(X, Y) = E[XY] - E[X]E[Y]$.
- **Correlation:** $\rho_{X,Y} = \frac{\text{Cov}(X,Y)}{\sigma_X \sigma_Y} \in [-1, 1]$.
- **Linear Variance:** $\text{Var}(aX + bY) = a^2 \text{Var}(X) + b^2 \text{Var}(Y) + 2ab \, \text{Cov}(X,Y)$.
- **Zero Covariance Trap:** Zero covariance does **not** imply independence (e.g. $Y=X^2$ for symmetric $X$). It implies independence only if $X, Y$ are jointly Gaussian.

### 2.5 Probability Inequalities & Limit Theorems
- **Markov's Inequality:** For non-negative $X \ge 0$ and $a > 0$:
  $$P(X \ge a) \le \frac{E[X]}{a}$$
- **Chebyshev's Inequality:** For any distribution with mean $\mu$ and variance $\sigma^2$:
  $$P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}, \qquad P(|X - \mu| \ge \epsilon) \le \frac{\sigma^2}{\epsilon^2}$$
- **Central Limit Theorem (CLT):** For $n \ge 30$ i.i.d. random variables with mean $\mu$ and variance $\sigma^2$:
  $$\bar{X}_n \sim \mathcal{N}\left(\mu, \frac{\sigma^2}{n}\right), \qquad Z = \frac{\bar{X}_n - \mu}{\sigma/\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1)$$

### 2.6 Statistics, Maximum Likelihood & Hypothesis Testing (DA Sec 1)
- **Unbiased Estimators:** $E[\bar{X}] = \mu$, $E[S^2] = \sigma^2$ where $S^2 = \frac{1}{n-1}\sum(X_i-\bar{X})^2$.
- **MLE Key Results:**
  - Bernoulli: $\hat{p} = \bar{X}$
  - Poisson: $\hat{\lambda} = \bar{X}$
  - Exponential: $\hat{\lambda} = 1/\bar{X}$
  - Uniform$[0, \theta]$: $\hat{\theta} = \max(X_1, \dots, X_n)$
- **Hypothesis Testing Errors:**
  - Type I Error ($\alpha$): Reject $H_0$ when $H_0$ is true (False Alarm).
  - Type II Error ($\beta$): Fail to reject $H_0$ when $H_0$ is false (Missed Detection).
  - Power of Test: $1 - \beta$.
- **$Z$-Test vs $t$-Test:** Use $Z$-test when population $\sigma$ is known or $n \ge 30$. Use $t$-test when population is normal, $\sigma$ unknown, and $n < 30$.

---

# PART 3: DISCRETE MATHEMATICS
*(GATE CS Section 1 Core & GATE DA Graphs/AI)*

### 3.1 Propositional & Predicate Logic
- **Implication Equivalences:**
  $$p \to q \equiv \neg p \vee q \equiv \neg q \to \neg p \quad (\text{Contrapositive})$$
  $$\neg(p \to q) \equiv p \wedge \neg q$$
- **Quantifier Rules & Traps:**
  - $\forall x (P(x) \wedge Q(x)) \equiv (\forall x P(x)) \wedge (\forall x Q(x))$  ✅
  - $\forall x (P(x) \vee Q(x)) \not\equiv (\forall x P(x)) \vee (\forall x Q(x))$  ❌ (Major GATE trap!)
  - $\exists x (P(x) \vee Q(x)) \equiv (\exists x P(x)) \vee (\exists x Q(x))$  ✅
  - $\exists x (P(x) \wedge Q(x)) \not\equiv (\exists x P(x)) \wedge (\exists x Q(x))$  ❌

### 3.2 Sets, Relations, POSETs & Lattices
- **Relation Counts on Set with $n$ Elements:**
  - Total relations: $2^{n^2}$
  - Reflexive relations: $2^{n(n-1)}$
  - Symmetric relations: $2^{\frac{n(n+1)}{2}}$
  - Reflexive & Symmetric: $2^{\frac{n(n-1)}{2}}$
  - Antisymmetric relations: $2^n \cdot 3^{\frac{n(n-1)}{2}}$
- **POSET:** Relation is Reflexive, Antisymmetric, and Transitive.
- **Lattice:** POSET where every pair of elements has a unique Least Upper Bound ($a \vee b$, Join) and unique Greatest Lower Bound ($a \wedge b$, Meet).

### 3.3 Combinatorics & Counting
- **Identical Items into Distinct Bins (Stars & Bars):**
  - Non-negative integers ($x_1 + \dots + x_r = n, x_i \ge 0$): $\binom{n + r - 1}{r - 1} = \binom{n+r-1}{n}$.
  - Positive integers ($x_i \ge 1$): $\binom{n - 1}{r - 1}$.
- **Derangements $D_n$:** $D_n = n! \sum_{k=0}^n \frac{(-1)^k}{k!}$. $D_1=0, D_2=1, D_3=2, D_4=9, D_5=44$.

### 3.4 Graph Theory
- **Handshaking Lemma:** $\sum \deg(v) = 2|E| \implies$ number of odd-degree vertices is always **even**.
- **Trees:** $n$ vertices $\implies$ exactly $n-1$ edges. Number of labelled trees on $n$ vertices = $n^{n-2}$ (Cayley's Formula).
- **Eulerian Graphs:**
  - Eulerian Circuit $\iff$ Connected and **every** vertex has **even** degree.
  - Eulerian Trail $\iff$ Connected and **exactly two** vertices have odd degree.
- **Planar Graphs:**
  - Euler's formula: $V - E + R = 2$ (for connected planar graphs).
  - General planar bound: $E \le 3V - 6$.
  - Triangle-free / Bipartite planar bound: $E \le 2V - 4$.
- **Chromatic Number $\chi(G)$:**
  - Complete graph $K_n$: $\chi = n$.
  - Bipartite graph $K_{m,n}$ ($E > 0$): $\chi = 2$ (Bipartite $\iff$ No odd cycles).
  - Odd cycle $C_{2k+1}$: $\chi = 3$. Even cycle $C_{2k}$: $\chi = 2$.
  - Planar graph: $\chi \le 4$.

### 3.5 Groups & Abstract Algebra
- **Hierarchy:** Semigroup (Closure, Assoc) $\to$ Monoid (+ Identity) $\to$ Group (+ Inverses) $\to$ Abelian (+ Commutativity).
- **Lagrange's Theorem:** Order of any subgroup $H$ divides the order of finite group $G$. Order of any element $a$ divides $|G|$.

---

# PART 4: CALCULUS & OPTIMIZATION
*(GATE CS Section 1 & GATE DA Section 3)*

### 4.1 Limits, Continuity & Mean Value Theorems
- **L'Hôpital's Rule:** Applicable ONLY for $\left[\frac{0}{0}\right]$ or $\left[\frac{\pm\infty}{\pm\infty}\right]$: $\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}$.
- **Rolle's Theorem:** $f$ continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b) \implies \exists c \in (a,b)$ with $f'(c) = 0$.
- **Lagrange's MVT:** $\exists c \in (a,b)$ such that $f'(c) = \frac{f(b) - f(a)}{b - a}$.
- **Cauchy's MVT:** $\frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)}$.

### 4.2 Single-Variable Maxima, Minima & Leibniz Rule
- **First & Second Derivative Tests:** $f'(x_0) = 0$:
  - $f''(x_0) > 0 \implies$ Local Minimum.
  - $f''(x_0) < 0 \implies$ Local Maximum.
  - $f''(x_0) = 0 \implies$ Inconclusive (test higher derivatives).
- **Leibniz Differentiation Under Integral:**
  $$\frac{d}{dx} \left[ \int_{u(x)}^{v(x)} f(t) \, dt \right] = f(v(x)) v'(x) - f(u(x)) u'(x)$$

### 4.3 Multivariable Calculus: Gradients, Directional Derivatives & Hessians
- **Gradient:** $\nabla f = \left[\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n}\right]^T$.
- **Directional Derivative:** $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u} = \|\nabla f\| \cos \theta$ (for unit vector $\mathbf{u}$).
  - Maximum rate of increase is $\|\nabla f\|$ along $\nabla f$.
  - Maximum rate of decrease is $-\|\nabla f\|$ along $-\nabla f$.
  - Rate is $0$ orthogonal to $\nabla f$ (along level curve).
- **Hessian Matrix:** Symmetric matrix of second-order partial derivatives $H_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j}$.

### 4.4 Multivariable Optimization (Unconstrained)
At critical point where $\nabla f(x, y) = \mathbf{0}$, evaluate discriminant $D = f_{xx}f_{yy} - (f_{xy})^2 = \det(H)$:
- $D > 0$ and $f_{xx} > 0 \implies$ **Local Minimum** (Hessian is Positive Definite).
- $D > 0$ and $f_{xx} < 0 \implies$ **Local Maximum** (Hessian is Negative Definite).
- $D < 0 \implies$ **Saddle Point** (Hessian has mixed eigenvalues).
- $D = 0 \implies$ **Inconclusive**.

### 4.5 Convexity, KKT Conditions & Gradient Descent (DA Sec 3)
- **Convex Functions:** Hessian $H(x) \succeq 0$ (positive semi-definite) everywhere. Any local minimum is a **global minimum**.
- **KKT Conditions:** Minimize $f(x)$ s.t. $h_j(x)=0$ and $g_i(x)\le 0$:
  1. Stationarity: $\nabla f(x^*) + \sum \lambda_j \nabla h_j(x^*) + \sum \mu_i \nabla g_i(x^*) = 0$
  2. Primal Feasibility: $g_i(x^*) \le 0$, $h_j(x^*) = 0$
  3. Dual Feasibility: $\mu_i \ge 0$
  4. Complementary Slackness: $\mu_i g_i(x^*) = 0$
- **Gradient Descent:** $x^{(t+1)} = x^{(t)} - \eta \nabla f(x^{(t)})$. Guaranteed convergence for step size $\eta < \frac{2}{L}$ on $L$-smooth functions.

---

# PART 5: MASTER 40 GATE TRAPS DIRECTORY

1. $\det(A+B) \neq \det(A) + \det(B)$ in general.
2. $\det(cA) = c^n \det(A)$ for $n \times n$ matrix (do not forget the $n$th power).
3. $AB = 0$ does not imply $A=0$ or $B=0$ (matrix rings have zero divisors).
4. Repeated eigenvalues do not imply non-diagonalizability ($\text{GM}=\text{AM}$ governs).
5. Orthogonal matrices have eigenvalues on the unit circle ($|\lambda|=1$) and $\det = \pm 1$.
6. $\text{Rank}(AB) \le \min(\text{Rank}(A), \text{Rank}(B))$.
7. Mutually exclusive events are never independent (if probabilities are positive).
8. Zero covariance only implies independence for bivariate Gaussian distributions; otherwise false.
9. Sample variance estimator divides by $n-1$ for unbiasedness; MLE divides by $n$.
10. $\forall x (P(x) \vee Q(x)) \not\equiv \forall x P(x) \vee \forall x Q(x)$ (quantifiers do not distribute over $\vee$).
11. Empty relation $\emptyset$ is irreflexive, symmetric, and transitive, but NOT reflexive.
12. Every POSET is not a lattice; pairwise unique LUB and GLB must exist.
13. Labelled trees count is $n^{n-2}$; unlabelled trees count is totally different.
14. Planar graphs can contain triangles; the bound is $E \le 3V-6$ (tightened to $E \le 2V-4$ only if triangle-free).
15. Check indeterminate form $\left[\frac{0}{0}\right]$ or $\left[\frac{\infty}{\infty}\right]$ before applying L'Hôpital.
16. $f'(c) = 0$ can be an inflection point ($f(x)=x^3$ at $x=0$), not necessarily an extremum.
17. In closed interval optimization $[a, b]$, always check function values at the endpoints $a$ and $b$.
18. In 2D optimization, $D = rt - s^2 < 0$ implies a **Saddle Point**, NOT inconclusive.
19. KKT inequality multipliers for minimization must satisfy $\mu_i \ge 0$.
20. Sum of singular values $\sum \sigma_i$ is the Nuclear Norm; largest singular value $\sigma_1$ is the Spectral Norm $\|A\|_2$.
