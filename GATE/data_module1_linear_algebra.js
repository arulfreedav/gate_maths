// ============================================================================
// GATE 2027 Mathematics Master Question Bank: Module 1 - Linear Algebra
// 50 Learn Problems (Full Solutions & Shortcuts) + 50 Practice Problems (Hints & Answers)
// Covers: GATE CS (Section 1) & GATE DA (Section 2)
// ============================================================================

const module1_learn_problems = [
  // --- SUBTOPIC 1: Matrices, Determinants & Inverses (1-10) ---
  {
    id: "LA-L-01",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2020",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ and $B$ be $n \\times n$ invertible real matrices. Which of the following statements is <strong>NOT</strong> necessarily TRUE?",
    options: [
      "(A) $\\det(A^{-1}) = (\\det(A))^{-1}$",
      "(B) $\\det(A^T) = \\det(A)$",
      "(C) $\\det(A + B) = \\det(A) + \\det(B)$",
      "(D) $\\det(kA) = k^n \\det(A)$ for any scalar $k \\in \\mathbb{R}$"
    ],
    answer: "Option C",
    shortcut: "Test $A = I_2$ and $B = -I_2$. $\\det(A) = 1, \\det(B) = 1$, but $A+B = 0 \\implies \\det(A+B) = 0 \\neq 1+1=2$.",
    solution: "Determinants are multilinear with respect to individual rows/columns, NOT additive over matrices! In general, $\\det(A + B) \\neq \\det(A) + \\det(B)$. Options A, B, and D are standard theorems: $\\det(A A^{-1}) = \\det(I) = 1 \\implies \\det(A^{-1}) = 1/\\det(A)$; transposition preserves determinant; scaling an $n \\times n$ matrix scales all $n$ rows, yielding $k^n$."
  },
  {
    id: "LA-L-02",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2014",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ be an invertible $3 \\times 3$ matrix with $\\det(A) = 5$. The value of $\\det(\\text{adj}(A))$ is:",
    options: ["(A) 5", "(B) 25", "(C) 125", "(D) 1/5"],
    answer: "Option B (25)",
    shortcut: "Use the formula $|\\text{adj}(A)| = |A|^{n-1} = 5^{3-1} = 25$.",
    solution: "Since $A \\cdot \\text{adj}(A) = |A| I_n$, taking determinants on both sides gives $|A| \\cdot |\\text{adj}(A)| = | |A| I_n | = |A|^n |I_n| = |A|^n$. Dividing by $|A|$ (since $|A| \\neq 0$) yields $|\\text{adj}(A)| = |A|^{n-1}$. For $n = 3$ and $|A| = 5$: $|\\text{adj}(A)| = 5^{3-1} = 5^2 = 25$."
  },
  {
    id: "LA-L-03",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2023",
    marks: 2,
    type: "NAT",
    statement: "Consider the $3 \\times 3$ matrix $M = \\begin{pmatrix} 2 & 1 & 0 \\\\ 3 & 4 & 1 \\\\ -1 & 2 & 3 \\end{pmatrix}$. The value of $\\det(M)$ is ________ (in integer).",
    options: [],
    answer: "10",
    shortcut: "Expand along Row 1 which contains a zero: $2(12-2) - 1(9 - (-1)) + 0 = 2(10) - 1(10) = 10$.",
    solution: "Cofactor expansion along Row 1:\n$$\\det(M) = 2 \\begin{vmatrix} 4 & 1 \\\\ 2 & 3 \\end{vmatrix} - 1 \\begin{vmatrix} 3 & 1 \\\\ -1 & 3 \\end{vmatrix} + 0 \\begin{vmatrix} 3 & 4 \\\\ -1 & 2 \\end{vmatrix}$$\nMinor 1: $(4)(3) - (1)(2) = 12 - 2 = 10$.\nMinor 2: $(3)(3) - (1)(-1) = 9 + 1 = 10$.\n$$\\det(M) = 2(10) - 1(10) = 20 - 10 = 10.$$"
  },
  {
    id: "LA-L-04",
    subtopic: "Determinants & Inverses",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "Let $A$ and $B$ be $n \\times n$ matrices. Consider the block matrix $M = \\begin{pmatrix} A & C \\\\ 0 & B \\end{pmatrix}$. Which of the following is always true about $\\det(M)$?",
    options: [
      "(A) $\\det(M) = \\det(A) + \\det(B)$",
      "(B) $\\det(M) = \\det(A) \\cdot \\det(B)$",
      "(C) $\\det(M) = \\det(A) \\cdot \\det(B) - \\det(C)$",
      "(D) $\\det(M)$ depends non-linearly on $C$"
    ],
    answer: "Option B",
    shortcut: "Block triangular matrix determinant rule: $\\det \\begin{pmatrix} A & C \\\\ 0 & B \\end{pmatrix} = \\det(A) \\det(B)$.",
    solution: "For any block upper-triangular or lower-triangular matrix where the diagonal blocks $A$ and $B$ are square, the determinant is the product of the determinants of the diagonal blocks: $\\det(M) = \\det(A) \\det(B)$. The off-diagonal block $C$ has zero contribution to the determinant."
  },
  {
    id: "LA-L-05",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2015",
    marks: 2,
    type: "NAT",
    statement: "The maximum value of the determinant among all $2 \\times 2$ real symmetric matrices with trace 14 and integer entries is ________.",
    options: [],
    answer: "49",
    shortcut: "Trace $a+c = 14$. $\\det = ac - b^2 \\le ac \\le \\left(\\frac{a+c}{2}\\right)^2 = 7^2 = 49$.",
    solution: "Let $M = \\begin{pmatrix} a & b \\\\ b & c \\end{pmatrix}$ with $a, b, c \\in \\mathbb{Z}$. $\\text{Trace}(M) = a + c = 14$. Determinant is $\\det(M) = ac - b^2$. To maximize $\\det(M)$, we must choose $b = 0$ (since $b^2 \\ge 0$) and maximize $ac$. By AM-GM inequality, $ac \\le \\left(\\frac{a+c}{2}\\right)^2 = \\left(\\frac{14}{2}\\right)^2 = 49$. Equality is achieved when $a = c = 7$, yielding $\\det(M)_{\\max} = 7(7) - 0 = 49$."
  },
  {
    id: "LA-L-06",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2017",
    marks: 1,
    type: "MCQ",
    statement: "If $A$ is an $n \\times n$ orthogonal matrix, then the only possible values for $\\det(A)$ are:",
    options: ["(A) 0 and 1", "(B) 1 and -1", "(C) Any non-zero real number", "(D) 0 only"],
    answer: "Option B (1 and -1)",
    shortcut: "$A^T A = I \\implies |A^T||A| = |A|^2 = 1 \\implies |A| = \\pm 1$.",
    solution: "By definition of an orthogonal matrix, $A^T A = I_n$. Taking the determinant on both sides: $\\det(A^T A) = \\det(A^T) \\det(A) = (\\det(A))^2 = \\det(I_n) = 1$. Taking square roots gives $\\det(A) = \\pm 1$."
  },
  {
    id: "LA-L-07",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2013",
    marks: 1,
    type: "MCQ",
    statement: "If $P$ is an $n \\times n$ matrix such that $P^T = -P$ (skew-symmetric) and $n$ is an odd integer, then $\\det(P)$ is:",
    options: ["(A) 1", "(B) -1", "(C) 0", "(D) Cannot be determined"],
    answer: "Option C (0)",
    shortcut: "$\\det(P) = \\det(P^T) = \\det(-P) = (-1)^n \\det(P) = -\\det(P) \\implies 2\\det(P) = 0 \\implies \\det(P) = 0$.",
    solution: "Given $P^T = -P$. Taking determinant: $\\det(P^T) = \\det(-P)$. Since $\\det(P^T) = \\det(P)$ and $\\det(-P) = (-1)^n \\det(P)$: $\\det(P) = (-1)^n \\det(P)$. Since $n$ is odd, $(-1)^n = -1$, which means $\\det(P) = -\\det(P) \\implies 2 \\det(P) = 0 \\implies \\det(P) = 0$."
  },
  {
    id: "LA-L-08",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2016",
    marks: 2,
    type: "MCQ",
    statement: "Let $A$ be a $4 \\times 4$ real matrix with $\\det(A) = 3$. What is the value of $\\det(2A^{-1} \\text{adj}(A))$?",
    options: ["(A) 16", "(B) 48", "(C) 144", "(D) 256"],
    answer: "Option C (144)",
    shortcut: "$\\det(2M) = 2^4 \\det(M) = 16 \\cdot \\frac{1}{|A|} \\cdot |A|^{4-1} = 16 |A|^2 = 16(9) = 144$.",
    solution: "Step 1: The matrix is of order $n = 4$. By scalar rule, $\\det(2M) = 2^4 \\det(M) = 16 \\det(M)$.\nStep 2: Here $M = A^{-1} \\text{adj}(A)$. So $\\det(M) = \\det(A^{-1}) \\cdot \\det(\\text{adj}(A))$.\nStep 3: $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\frac{1}{3}$.\nStep 4: $\\det(\\text{adj}(A)) = |A|^{n-1} = 3^{4-1} = 3^3 = 27$.\nStep 5: $\\det(M) = \\frac{1}{3} \\times 27 = 9$.\nStep 6: Total determinant $= 16 \\times 9 = 144$."
  },
  {
    id: "LA-L-09",
    subtopic: "Determinants & Inverses",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "For any two invertible matrices $A, B \\in \\mathbb{R}^{n \\times n}$, which of the following expressions is equal to $(A B)^{-1}$?",
    options: ["(A) $A^{-1} B^{-1}$", "(B) $B^{-1} A^{-1}$", "(C) $(BA)^{-1}$", "(D) $A^{-1} + B^{-1}$"],
    answer: "Option B ($B^{-1} A^{-1}$)",
    shortcut: "Reversal law of matrix inversion: $(AB)(B^{-1} A^{-1}) = A (B B^{-1}) A^{-1} = A I A^{-1} = I$.",
    solution: "Matrix multiplication is non-commutative. When inverting a product, the order of factors must reverse: $(AB)^{-1} = B^{-1} A^{-1}$. Similarly, $(A B C)^{-1} = C^{-1} B^{-1} A^{-1}$."
  },
  {
    id: "LA-L-10",
    subtopic: "Determinants & Inverses",
    source: "GATE CS 2011",
    marks: 2,
    type: "NAT",
    statement: "Let $A$ be a $3 \\times 3$ matrix such that $\\det(A) = 2$. What is the value of $\\det(\\text{adj}(\\text{adj}(A)))$?",
    options: [],
    answer: "16",
    shortcut: "Formula: $|\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2} = 2^{(3-1)^2} = 2^4 = 16$.",
    solution: "For an $n \\times n$ matrix $A$, $\\text{adj}(\\text{adj}(A)) = |A|^{n-2} A$. Taking the determinant on both sides: $|\\text{adj}(\\text{adj}(A))| = | |A|^{n-2} A | = (|A|^{n-2})^n |A| = |A|^{n(n-2) + 1} = |A|^{(n-1)^2}$. For $n = 3$ and $|A| = 2$: $|\\text{adj}(\\text{adj}(A))| = 2^{(3-1)^2} = 2^{2^2} = 2^4 = 16$."
  },

  // --- SUBTOPIC 2: Rank, Nullity & Linear Independence (11-20) ---
  {
    id: "LA-L-11",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2018",
    marks: 2,
    type: "MCQ",
    statement: "The rank of the matrix $M = \\begin{pmatrix} 1 & 1 & 1 & 0 \\\\ 1 & 1 & 0 & 1 \\\\ 1 & 0 & 1 & 1 \\\\ 0 & 1 & 1 & 1 \\end{pmatrix}$ is:",
    options: ["(A) 1", "(B) 2", "(C) 3", "(D) 4"],
    answer: "Option D (Rank = 4)",
    shortcut: "Elementary row reduction gives 4 non-zero pivot diagonal entries, so $\\det(M) \\neq 0 \\implies \\text{Rank} = 4$.",
    solution: "Perform row operations: $R_2 \\to R_2 - R_1, R_3 \\to R_3 - R_1$. Swapping and eliminating leads directly to upper triangular form with pivot elements $1, 1, 1, 3$ along the diagonal. Since all 4 pivots are non-zero, the rows are linearly independent and $\\text{Rank}(M) = 4$."
  },
  {
    id: "LA-L-12",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2021 Set 1",
    marks: 1,
    type: "MCQ",
    statement: "Let $x$ and $y$ be non-zero column vectors in $\\mathbb{R}^n$ ($n \\ge 2$). Consider the $n \\times n$ matrix $M = x y^T$. What is the rank of matrix $M$?",
    options: ["(A) 0", "(B) 1", "(C) 2", "(D) n"],
    answer: "Option B (1)",
    shortcut: "Every column of $x y^T$ is a scalar multiple of vector $x$. Thus $\\text{Col}(M) = \\text{span}\\{x\\}$, so rank = 1.",
    solution: "Writing $M = x y^T = [y_1 x, y_2 x, \\dots, y_n x]$, every column of $M$ is proportional to $x$. Since $x \\neq 0$ and $y \\neq 0$, the column space has dimension 1. Hence, $\\text{Rank}(M) = 1$. By the Rank-Nullity Theorem, $\\text{Nullity}(M) = n - 1$."
  },
  {
    id: "LA-L-13",
    subtopic: "Rank & Nullity",
    source: "GATE DA 2024",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ be an $m \\times n$ matrix with real entries. Which of the following statements is <strong>ALWAYS</strong> TRUE?",
    options: [
      "(A) $\\text{Null}(A^T A) = \\text{Null}(A)$",
      "(B) $\\text{Rank}(A^T A) < \\text{Rank}(A)$ when $m < n$",
      "(C) $\\text{Null}(A A^T) = \\text{Null}(A^T A)$",
      "(D) $A^T A$ is invertible for any matrix $A$"
    ],
    answer: "Option A",
    shortcut: "If $A^T A x = 0 \\implies x^T A^T A x = \\|Ax\\|^2 = 0 \\implies Ax = 0$. Hence null spaces are identical.",
    solution: "1. If $x \\in \\text{Null}(A)$, $Ax = 0 \\implies A^T A x = 0 \\implies x \\in \\text{Null}(A^T A)$. 2. If $x \\in \\text{Null}(A^T A)$, $(A^T A)x = 0 \\implies x^T A^T A x = (Ax)^T (Ax) = \\|Ax\\|^2 = 0 \\implies Ax = 0 \\implies x \\in \\text{Null}(A)$. Therefore, $\\text{Null}(A^T A) = \\text{Null}(A)$. By the Rank-Nullity theorem, $\\text{Rank}(A^T A) = \\text{Rank}(A)$."
  },
  {
    id: "LA-L-14",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2022",
    marks: 2,
    type: "MCQ",
    statement: "Let $A$ be a $3 \\times 4$ matrix and $B$ be a $4 \\times 3$ matrix such that $A B = I_3$. Which of the following statements is <strong>FALSE</strong>?",
    options: [
      "(A) $\\text{Rank}(A) = 3$",
      "(B) $\\text{Rank}(B) = 3$",
      "(C) $B A = I_4$",
      "(D) $\\text{Nullity}(A) = 1$"
    ],
    answer: "Option C (is FALSE)",
    shortcut: "Rank of $BA$ is at most $\\min(\\text{rank}(A), \\text{rank}(B)) = 3$. But $I_4$ has rank 4. A rank 3 matrix can never equal $I_4$!",
    solution: "Since $AB = I_3$, $\\text{Rank}(AB) = 3$. Because $\\text{Rank}(AB) \\le \\min(\\text{Rank}(A), \\text{Rank}(B))$, both $A$ and $B$ must have rank $\\ge 3$. Since their maximum ranks are $\\min(3,4)=3$, $\\text{Rank}(A) = \\text{Rank}(B) = 3$. By Rank-Nullity on $A$, $\\text{Nullity}(A) = 4 - 3 = 1$. The matrix $BA$ is $4 \\times 4$ with rank at most 3, so $BA$ is not invertible and cannot equal $I_4$."
  },
  {
    id: "LA-L-15",
    subtopic: "Rank & Nullity",
    source: "GATE DA 2024",
    marks: 2,
    type: "MSQ",
    statement: "Let $A, B \\in \\mathbb{R}^{n \\times n}$. Which of the following statements is/are <strong>ALWAYS</strong> TRUE?",
    options: [
      "(A) $\\text{Rank}(A + B) \\le \\text{Rank}(A) + \\text{Rank}(B)$",
      "(B) $\\text{Rank}(AB) \\le \\min(\\text{Rank}(A), \\text{Rank}(B))$",
      "(C) $\\text{Rank}(AB) = \\text{Rank}(BA)$",
      "(D) If $A$ and $B$ are invertible, then $\\text{Rank}(AB) = n$"
    ],
    answer: "Options A, B, D",
    shortcut: "Counterexample for C: $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}, B = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\implies AB$ has rank 1, $BA$ has rank 0.",
    solution: "Option A is true because $\\text{Col}(A+B) \\subseteq \\text{Col}(A) + \\text{Col}(B)$. Option B is true because the columns of $AB$ are linear combinations of the columns of $A$. Option C is false (product ranks are generally unequal). Option D is true because the product of non-singular matrices is non-singular, hence full rank $n$."
  },
  {
    id: "LA-L-16",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2017",
    marks: 2,
    type: "NAT",
    statement: "Let $A$ be a $5 \\times 7$ matrix with real entries such that the dimension of the null space of $A$ is 3. What is the rank of $A^T$?",
    options: [],
    answer: "4",
    shortcut: "By Rank-Nullity: $\\text{Rank}(A) = n - \\text{Nullity}(A) = 7 - 3 = 4$. Since $\\text{Rank}(A^T) = \\text{Rank}(A)$, answer is 4.",
    solution: "For any $m \\times n$ matrix $A$, the Rank-Nullity Theorem states: $\\text{Rank}(A) + \\text{Nullity}(A) = n$ (number of columns). Here $n = 7$ and $\\text{Nullity}(A) = 3$, so $\\text{Rank}(A) = 7 - 3 = 4$. Since row rank equals column rank for any matrix, $\\text{Rank}(A^T) = \\text{Rank}(A) = 4$."
  },
  {
    id: "LA-L-17",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2014",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ be an $n \\times n$ matrix with rank $r < n$. The dimension of the solution space of the homogeneous system $Ax = 0$ is:",
    options: ["(A) $r$", "(B) $n - r$", "(C) $n$", "(D) $n - r + 1$"],
    answer: "Option B ($n - r$)",
    shortcut: "Dimension of solution space is nullity $= n - \\text{rank} = n - r$.",
    solution: "The solution space of $Ax = 0$ is precisely the null space $\\text{Null}(A)$. By the Rank-Nullity Theorem: $\\dim(\\text{Null}(A)) = n - \\text{Rank}(A) = n - r$."
  },
  {
    id: "LA-L-18",
    subtopic: "Rank & Nullity",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "If $A$ is a $4 \\times 5$ matrix and $B$ is a $5 \\times 4$ matrix, each having rank 4. By Sylvester's Rank Inequality, the minimum possible rank of $AB$ is:",
    options: ["(A) 0", "(B) 3", "(C) 4", "(D) 2"],
    answer: "Option B (3)",
    shortcut: "Sylvester's Inequality: $\\text{rank}(AB) \\ge \\text{rank}(A) + \\text{rank}(B) - n = 4 + 4 - 5 = 3$.",
    solution: "Sylvester's Rank Inequality states: For $A_{m \\times n}$ and $B_{n \\times p}$, $\\text{Rank}(AB) \\ge \\text{Rank}(A) + \\text{Rank}(B) - n$. Here $n = 5$ (inner dimension). Thus $\\text{Rank}(AB) \\ge 4 + 4 - 5 = 3$."
  },
  {
    id: "LA-L-19",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2008",
    marks: 2,
    type: "NAT",
    statement: "The rank of the $3 \\times 3$ matrix $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}$ is ________.",
    options: [],
    answer: "2",
    shortcut: "Notice $R_2 - R_1 = (3, 3, 3)$ and $R_3 - R_2 = (3, 3, 3)$. The differences are identical, meaning $R_3 = 2R_2 - R_1$. One row is redundant!",
    solution: "Perform row operations: $R_2 \\to R_2 - 4R_1 = (0, -3, -6)$, $R_3 \\to R_3 - 7R_1 = (0, -6, -12)$. Now $R_3 - 2R_2 = (0, 0, 0)$. There are exactly 2 non-zero pivot rows in row-echelon form. Thus $\\text{Rank}(A) = 2$."
  },
  {
    id: "LA-L-20",
    subtopic: "Rank & Nullity",
    source: "GATE CS 2019",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ be an $m \\times n$ matrix with rank $m$. Then which of the following is necessarily true?",
    options: [
      "(A) $m \\le n$ and the system $Ax = b$ has at least one solution for every $b \\in \\mathbb{R}^m$.",
      "(B) $m \\ge n$ and the system $Ax = b$ has a unique solution.",
      "(C) $m = n$ and $A$ is invertible.",
      "(D) $Ax = 0$ has only the trivial solution."
    ],
    answer: "Option A",
    shortcut: "Rank $= m \\le \\min(m, n) \\implies m \\le n$. Full row rank means column space spans all of $\\mathbb{R}^m$, so $Ax = b$ is always consistent.",
    solution: "Since $\\text{Rank}(A) \\le \\min(m, n)$ and $\\text{Rank}(A) = m$, it must be that $m \\le n$. Full row rank means the column space has dimension $m$, spanning the entire codomain $\\mathbb{R}^m$. Therefore, for every vector $b \\in \\mathbb{R}^m$, $b$ lies in the column space, guaranteeing at least one solution to $Ax = b$."
  },

  // --- SUBTOPIC 3: Systems of Equations & LU Decomposition (21-30) ---
  {
    id: "LA-L-21",
    subtopic: "Systems of Linear Equations",
    source: "GATE CS 2023",
    marks: 2,
    type: "MCQ",
    statement: "Consider the system of linear equations:\n$$\\begin{aligned} x + 2y + z &= 4 \\\\ 2x + 4y + 2z &= 8 \\\\ 3x + 6y + kz &= 12 \\end{aligned}$$\nThe system has <strong>infinitely many solutions</strong> if and only if:",
    options: ["(A) $k = 3$", "(B) $k \\neq 3$", "(C) For all real values of $k$", "(D) For no real values of $k$"],
    answer: "Option A ($k = 3$)",
    shortcut: "Notice equation 2 is $2 \\times (Eq 1)$. For equation 3 to be a linear multiple of Eq 1, $k$ must be 3.",
    solution: "Form the augmented matrix $[A|b]$ and apply $R_2 \\to R_2 - 2R_1, R_3 \\to R_3 - 3R_1$. We get row 2 as all zeros $(0, 0, 0 | 0)$ and row 3 as $(0, 0, k - 3 | 0)$. If $k = 3$, row 3 also becomes entirely zeros, yielding $\\text{Rank}(A) = \\text{Rank}([A|b]) = 1 < 3$ (number of unknowns), giving infinitely many solutions with 2 free variables."
  },
  {
    id: "LA-L-22",
    subtopic: "Systems of Linear Equations",
    source: "GATE CS 2016",
    marks: 2,
    type: "MCQ",
    statement: "The system of linear equations:\n$$\\begin{aligned} x + y + z &= 3 \\\\ x - y - z &= 4 \\\\ x - 5y + kz &= 6 \\end{aligned}$$\nhas <strong>no solution</strong> if the value of $k$ is:",
    options: ["(A) -5", "(B) 5", "(C) 0", "(D) 1"],
    answer: "Option A ($k = -5$)",
    shortcut: "No solution occurs when $\\text{Rank}(A) < \\text{Rank}([A|b])$. In particular, $\\det(A) = 0$ is a necessary condition.",
    solution: "Set $\\det(A) = 0$:\n$$\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & -1 & -1 \\\\ 1 & -5 & k \\end{vmatrix} = 1(-k - 5) - 1(k + 1) + 1(-5 + 1) = -k - 5 - k - 1 - 4 = -2k - 10 = 0 \\implies k = -5.$$\nFor $k = -5$, row reduction shows $\\text{Rank}(A) = 2$ while $\\text{Rank}([A|b]) = 3$, meaning the system is inconsistent (no solution)."
  },
  {
    id: "LA-L-23",
    subtopic: "LU Decomposition",
    source: "GATE CS 2019",
    marks: 2,
    type: "NAT",
    statement: "A $3 \\times 3$ matrix $A$ is factored into $A = LU$ using Doolittle's method (where $L$ has 1s on the main diagonal). If $A = \\begin{pmatrix} 2 & 3 & 1 \\\\ 4 & 7 & 5 \\\\ 6 & 11 & 14 \\end{pmatrix}$, the value of entry $u_{23}$ in matrix $U$ is ________.",
    options: [],
    answer: "3",
    shortcut: "Gaussian elimination: multiplier for row 2 is $l_{21} = 4/2 = 2$. Row 2 of $U$ is $R_2 - 2R_1 = (0, 7-6, 5-2) = (0, 1, 3) \\implies u_{23} = 3$.",
    solution: "In Doolittle's LU decomposition, $U$ is the upper triangular matrix obtained directly by forward elimination without row swaps:\n1. Row 1 of $U$ is identical to Row 1 of $A$: $(2, 3, 1)$.\n2. Multiplier for $R_2$: $l_{21} = 4/2 = 2$.\n3. New Row 2: $R_2 - 2 R_1 = (4 - 4, 7 - 6, 5 - 2) = (0, 1, 3)$.\nTherefore, $u_{22} = 1$ and $u_{23} = 3$."
  },
  {
    id: "LA-L-24",
    subtopic: "LU Decomposition",
    source: "GATE CS 2015",
    marks: 1,
    type: "MCQ",
    statement: "An $n \\times n$ matrix $A$ can be decomposed into $A = LU$ without pivoting if and only if:",
    options: [
      "(A) $\\det(A) \\neq 0$",
      "(B) All leading principal submatrices of $A$ are non-singular",
      "(C) $A$ is symmetric and positive definite",
      "(D) $A$ has distinct eigenvalues"
    ],
    answer: "Option B",
    shortcut: "Gaussian elimination without row swaps requires every leading principal minor $A_k$ to be non-zero so pivots never vanish.",
    solution: "LU factorization without pivoting exists and is unique if and only if all leading principal minors $\\det(A_k) \\neq 0$ for $k = 1, 2, \\dots, n-1$. If any leading submatrix is singular, a zero pivot is encountered, requiring partial pivoting ($P A = L U$)."
  },
  {
    id: "LA-L-25",
    subtopic: "Systems of Linear Equations",
    source: "GATE CS 2014",
    marks: 1,
    type: "MCQ",
    statement: "Which of the following conditions ensures that a homogeneous system of $m$ linear equations in $n$ unknowns ($Ax = 0$) has a non-trivial solution?",
    options: [
      "(A) $m > n$",
      "(B) $m < n$",
      "(C) $m = n$ and $\\det(A) \\neq 0$",
      "(D) $\\text{Rank}(A) = n$"
    ],
    answer: "Option B ($m < n$)",
    shortcut: "More unknowns than equations $\\implies \\text{Rank}(A) \\le m < n \\implies$ free variables $\\ge n - m > 0$.",
    solution: "The rank of $A$ satisfies $\\text{Rank}(A) \\le \\min(m, n) = m$. Since $m < n$, $\\text{Rank}(A) < n$. By the Rank-Nullity Theorem, the dimension of the null space is $\\text{Nullity}(A) = n - \\text{Rank}(A) \\ge n - m > 0$. Having a positive nullity guarantees non-zero solutions (infinitely many)."
  },

  // --- SUBTOPIC 4: Eigenvalues, Trace, Determinant & Cayley-Hamilton (26-35) ---
  {
    id: "LA-L-26",
    subtopic: "Eigenvalues & Eigenvectors",
    source: "GATE CS 2024 Set 2",
    marks: 1,
    type: "MCQ",
    statement: "Let $M$ be a $3 \\times 3$ matrix with real entries such that $\\text{Trace}(M) = 6$ and $\\det(M) = 6$. If one of the eigenvalues of $M$ is $1$, what are the other two eigenvalues?",
    options: ["(A) 2 and 3", "(B) 1 and 6", "(C) -2 and -3", "(D) 0 and 5"],
    answer: "Option A (2 and 3)",
    shortcut: "Sum of remaining two $= 6 - 1 = 5$, Product $= 6 / 1 = 6$. The roots of $\\lambda^2 - 5\\lambda + 6 = 0$ are 2 and 3.",
    solution: "1. Sum of eigenvalues equals trace: $\\lambda_1 + \\lambda_2 + \\lambda_3 = 6 \\implies 1 + \\lambda_2 + \\lambda_3 = 6 \\implies \\lambda_2 + \\lambda_3 = 5$.\n2. Product of eigenvalues equals determinant: $\\lambda_1 \\lambda_2 \\lambda_3 = 6 \\implies 1 \\cdot (\\lambda_2 \\lambda_3) = 6 \\implies \\lambda_2 \\lambda_3 = 6$.\n3. Quadratic equation: $\\lambda^2 - 5\\lambda + 6 = 0 \\implies (\\lambda - 2)(\\lambda - 3) = 0 \\implies \\lambda_2 = 2, \\lambda_3 = 3$."
  },
  {
    id: "LA-L-27",
    subtopic: "Eigenvalues & Eigenvectors",
    source: "GATE CS 2021 Set 2",
    marks: 2,
    type: "MCQ",
    statement: "Let $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 2 \\end{pmatrix}$. Using the Cayley-Hamilton theorem, express $A^3$ in the form $\\alpha A + \\beta I$. What are the values of $\\alpha$ and $\\beta$?",
    options: ["(A) $\\alpha = 7, \\beta = -6$", "(B) $\\alpha = 6, \\beta = -7$", "(C) $\\alpha = 7, \\beta = 6$", "(D) $\\alpha = 8, \\beta = -2$"],
    answer: "Option A ($\\alpha = 7, \\beta = -6$)",
    shortcut: "Char eq: $\\lambda^2 - 3\\lambda + 2 = 0 \\implies A^2 = 3A - 2I$. Multiply by $A$: $A^3 = 3A^2 - 2A = 3(3A-2I) - 2A = 7A - 6I$.",
    solution: "Characteristic polynomial: $\\det(A - \\lambda I) = (1 - \\lambda)(2 - \\lambda) = \\lambda^2 - 3\\lambda + 2 = 0$. By Cayley-Hamilton, $A^2 - 3A + 2I = 0 \\implies A^2 = 3A - 2I$. Multiplying by $A$: $A^3 = 3A^2 - 2A = 3(3A - 2I) - 2A = 9A - 6I - 2A = 7A - 6I$. Thus $\\alpha = 7, \\beta = -6$."
  },
  {
    id: "LA-L-28",
    subtopic: "Eigenvalues & Eigenvectors",
    source: "GATE CS 2017",
    marks: 1,
    type: "MCQ",
    statement: "Let $A$ be a real symmetric matrix ($A = A^T$). If $v_1$ and $v_2$ are eigenvectors of $A$ corresponding to distinct eigenvalues $\\lambda_1 \\neq \\lambda_2$, then $v_1 \\cdot v_2$ is always:",
    options: ["(A) 1", "(B) 0", "(C) $\\lambda_1 \\lambda_2$", "(D) Undefined"],
    answer: "Option B (0 — Mutually Orthogonal)",
    shortcut: "Spectral Theorem: Eigenvectors of a real symmetric matrix corresponding to distinct eigenvalues are mutually orthogonal.",
    solution: "Consider $(A v_1)^T v_2 = \\lambda_1 (v_1^T v_2)$. Since $A$ is symmetric, $(A v_1)^T v_2 = v_1^T A^T v_2 = v_1^T (A v_2) = \\lambda_2 (v_1^T v_2)$. Subtracting gives $(\\lambda_1 - \\lambda_2)(v_1^T v_2) = 0$. Since $\\lambda_1 \\neq \\lambda_2$, $v_1^T v_2 = 0$."
  },
  {
    id: "LA-L-29",
    subtopic: "Eigenvalues & Eigenvectors",
    source: "GATE CS 2012",
    marks: 2,
    type: "NAT",
    statement: "The eigenvalues of a $2 \\times 2$ matrix $X$ are 4 and -2. The eigenvalues of the matrix $X^2 - 3X + 2I$ are $\\mu_1$ and $\\mu_2$. The value of $\\mu_1 + \\mu_2$ is ________.",
    options: [],
    answer: "18",
    shortcut: "Spectral Mapping: For eigenvalue $\\lambda$, $f(X)$ has eigenvalue $f(\\lambda)$. $f(4) = 16 - 12 + 2 = 6$. $f(-2) = 4 - (-6) + 2 = 12$. Sum $= 6 + 12 = 18$.",
    solution: "By the polynomial spectral mapping theorem: If $\\lambda$ is an eigenvalue of $X$, then for any polynomial $P(t)$, $P(\\lambda)$ is an eigenvalue of $P(X)$.\nFor $\\lambda_1 = 4$: $\\mu_1 = 4^2 - 3(4) + 2 = 16 - 12 + 2 = 6$.\nFor $\\lambda_2 = -2$: $\\mu_2 = (-2)^2 - 3(-2) + 2 = 4 + 6 + 2 = 12$.\nSum $= \\mu_1 + \\mu_2 = 6 + 12 = 18$."
  },
  {
    id: "LA-L-30",
    subtopic: "Eigenvalues & Eigenvectors",
    source: "GATE DA 2024",
    marks: 2,
    type: "MSQ",
    statement: "Let $P \\in \\mathbb{R}^{n \\times n}$ be an idempotent projection matrix ($P^2 = P$). Which of the following statements is/are <strong>ALWAYS</strong> TRUE?",
    options: [
      "(A) The only possible eigenvalues of $P$ are 0 and 1.",
      "(B) $\\text{Trace}(P) = \\text{Rank}(P)$",
      "(C) $(I - P)$ is also an idempotent matrix.",
      "(D) If $P \\neq I$, then $\\det(P) = 0$."
    ],
    answer: "Options A, B, C, D (All Four)",
    shortcut: "All 4 are fundamental canonical properties of projection matrices in Data Science.",
    solution: "A is true: $P v = \\lambda v \\implies P^2 v = \\lambda^2 v = \\lambda v \\implies \\lambda(\\lambda - 1) = 0$. B is true: Every idempotent matrix is diagonalizable; trace is sum of eigenvalues (count of 1s) = rank. C is true: $(I-P)^2 = I - 2P + P^2 = I - P$. D is true: If $P \\neq I$, at least one eigenvalue must be 0, so $\\det(P) = 0$."
  },

  // --- SUBTOPIC 5: SVD, Vector Spaces, Projections & Quadratic Forms (31-50) ---
  {
    id: "LA-L-31",
    subtopic: "SVD & Special Matrices",
    source: "GATE DA 2024",
    marks: 2,
    type: "NAT",
    statement: "Let $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & -4 \\end{pmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    options: [],
    answer: "4",
    shortcut: "Singular values are non-negative square roots of eigenvalues of $A^T A$: $\\sigma_i = |\\lambda_i| \\implies \\sigma_1 = |-4| = 4$.",
    solution: "$A^T A = \\begin{pmatrix} 9 & 0 \\\\ 0 & 16 \\end{pmatrix}$. The eigenvalues of $A^T A$ are 16 and 9. Singular values are $\\sigma_1 = \\sqrt{16} = 4$ and $\\sigma_2 = \\sqrt{9} = 3$. The largest singular value is 4."
  },
  {
    id: "LA-L-32",
    subtopic: "Vector Spaces",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "Which of the following subsets is a valid <strong>vector subspace</strong> of $\\mathbb{R}^3$?",
    options: [
      "(A) $W_1 = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - 3z = 0\\}$",
      "(B) $W_2 = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x + 2y - 3z = 1\\}$",
      "(C) $W_3 = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid xy = 0\\}$",
      "(D) $W_4 = \\{(x, y, z) \\in \\mathbb{R}^3 \\mid x \\ge 0\\}$"
    ],
    answer: "Option A",
    shortcut: "A subspace must contain $(0, 0, 0)$ and be closed under addition & scalar multiplication (linear homogeneous equation).",
    solution: "A valid subspace must satisfy three conditions: 1. Contains zero vector. 2. Closed under addition. 3. Closed under scalar multiplication.\n$W_1$ is a plane passing through the origin (homogeneous linear equation), hence a subspace of dimension 2.\n$W_2$ fails: $(0, 0, 0) \\notin W_2$.\n$W_3$ fails: $(1, 0, 0) \\in W_3$ and $(0, 1, 0) \\in W_3$, but their sum $(1, 1, 0) \\notin W_3$ ($xy = 1 \\neq 0$).\n$W_4$ fails scalar multiplication by negative numbers: if $x > 0$, $(-1)x < 0 \\notin W_4$."
  },
  {
    id: "LA-L-33",
    subtopic: "Quadratic Forms",
    source: "GATE DA 2024",
    marks: 2,
    type: "MSQ",
    statement: "Let $A \\in \\mathbb{R}^{n \\times n}$ be a real symmetric matrix with quadratic form $Q(x) = x^T A x$. Which of the following conditions is/are equivalent to $A$ being <strong>Positive Definite</strong>?",
    options: [
      "(A) All eigenvalues of $A$ are strictly positive.",
      "(B) All leading principal minors of $A$ are strictly positive.",
      "(C) $\\det(A) > 0$ and $\\text{Trace}(A) > 0$.",
      "(D) There exists an invertible matrix $P$ such that $A = P^T P$."
    ],
    answer: "Options A, B, D",
    shortcut: "Option C fails for $n \\ge 3$: e.g., eigenvalues $(-1, -1, 4) \\implies \\det = 4 > 0, \\text{Trace} = 2 > 0$, but not positive definite!",
    solution: "A is the spectral definition of positive definiteness. B is Sylvester's criterion. D is the Cholesky factorization characterization ($A = L L^T$). C is insufficient for matrices of order $n \\ge 3$ because two negative eigenvalues cancel in determinant yet make the quadratic form indefinite."
  },
  {
    id: "LA-L-34",
    subtopic: "SVD & Matrix Norms",
    source: "GATE DA 2024 / EC",
    marks: 2,
    type: "MCQ",
    statement: "The Frobenius norm $\\|A\\|_F$ of an $m \\times n$ matrix $A$ in terms of its singular values $\\sigma_1, \\dots, \\sigma_r$ is:",
    options: [
      "(A) $\\sum_{i=1}^r \\sigma_i$",
      "(B) $\\sqrt{\\sum_{i=1}^r \\sigma_i^2}$",
      "(C) $\\max_i \\sigma_i$",
      "(D) $\\prod_{i=1}^r \\sigma_i$"
    ],
    answer: "Option B ($\\sqrt{\\sum \\sigma_i^2}$)",
    shortcut: "Trace cyclic property: $\\|A\\|_F^2 = \\text{Trace}(A^T A) = \\sum \\lambda_i(A^T A) = \\sum \\sigma_i^2$.",
    solution: "By definition, $\\|A\\|_F^2 = \\sum_{i,j} a_{ij}^2 = \\text{Trace}(A^T A)$. The trace of a matrix equals the sum of its eigenvalues. Since $\\lambda_i(A^T A) = \\sigma_i^2$, we have $\\|A\\|_F = \\sqrt{\\sum \\sigma_i^2}$. Note that Option C is the spectral norm $\\|A\\|_2 = \\sigma_{\\max}$, and Option A is the nuclear norm $\\|A\\|_*$."
  },
  {
    id: "LA-L-35",
    subtopic: "Vector Spaces",
    source: "GATE DA 2024 / MA",
    marks: 2,
    type: "NAT",
    statement: "The dimension of the vector space of all $3 \\times 3$ real <strong>skew-symmetric</strong> matrices ($A^T = -A$) is ________.",
    options: [],
    answer: "3",
    shortcut: "Formula: $\\frac{n(n-1)}{2} = \\frac{3(2)}{2} = 3$. Diagonal entries must be 0!",
    solution: "For any skew-symmetric matrix $A^T = -A$: 1. The diagonal entries satisfy $a_{ii} = -a_{ii} \\implies a_{ii} = 0$. 2. The lower triangular entries are determined by the upper triangular entries ($a_{ji} = -a_{ij}$). 3. The number of strictly upper triangular entries in an $n \\times n$ matrix is $\\frac{n(n-1)}{2}$. For $n = 3$: Dimension $= \\frac{3(2)}{2} = 3$."
  },
  {
    id: "LA-L-36",
    subtopic: "Vector Spaces",
    source: "GATE CS 2015",
    marks: 1,
    type: "NAT",
    statement: "The dimension of the vector space of all $3 \\times 3$ real <strong>symmetric</strong> matrices ($A^T = A$) is ________.",
    options: [],
    answer: "6",
    shortcut: "Formula: $\\frac{n(n+1)}{2} = \\frac{3(4)}{2} = 6$.",
    solution: "For an $n \\times n$ symmetric matrix, independent entries reside on the main diagonal ($n$ entries) plus the strictly upper triangle ($\\frac{n(n-1)}{2}$ entries). Total independent parameters $= n + \\frac{n(n-1)}{2} = \\frac{n(n+1)}{2}$. For $n = 3$: Dimension $= \\frac{3 \\times 4}{2} = 6$."
  },
  {
    id: "LA-L-37",
    subtopic: "Linear Independence",
    source: "GATE CS 2020",
    marks: 2,
    type: "MCQ",
    statement: "The vectors $v_1 = (1, 2, 3)^T$, $v_2 = (2, k, 6)^T$, and $v_3 = (3, 6, 9)^T$ in $\\mathbb{R}^3$ are linearly dependent:",
    options: [
      "(A) Only when $k = 4$",
      "(B) Only when $k = 0$",
      "(C) For all real values of $k$",
      "(D) For no real value of $k$"
    ],
    answer: "Option C (For all real values of $k$)",
    shortcut: "Notice $v_3 = (3, 6, 9)^T = 3 \\times (1, 2, 3)^T = 3 v_1$. $v_1$ and $v_3$ are already collinear regardless of $k$!",
    solution: "Since $v_3 = 3 v_1$, the set $\\{v_1, v_2, v_3\\}$ contains two linearly dependent vectors ($3 v_1 + 0 v_2 - v_3 = 0$ is a non-trivial linear combination equaling zero). Therefore, the vectors are linearly dependent for every possible value of $k$."
  },
  {
    id: "LA-L-38",
    subtopic: "Diagonalization",
    source: "GATE CS 2018",
    marks: 2,
    type: "MCQ",
    statement: "Consider the matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Which of the following statements is TRUE?",
    options: [
      "(A) $A$ is diagonalizable because it has non-zero determinant.",
      "(B) $A$ is not diagonalizable because its geometric multiplicity is less than algebraic multiplicity.",
      "(C) $A$ is diagonalizable because it is upper triangular.",
      "(D) $A$ is symmetric and hence diagonalizable."
    ],
    answer: "Option B",
    shortcut: "Repeated eigenvalue $\\lambda = 2$ (AM = 2). $(A - 2I) = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$ has rank 1, so GM $= 2 - 1 = 1 < 2$. Defective matrix!",
    solution: "The characteristic equation is $(\\lambda - 2)^2 = 0$, giving eigenvalue $\\lambda = 2$ with Algebraic Multiplicity $AM = 2$. To find the eigenvectors: $(A - 2I) v = 0 \\implies \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies y = 0$. The eigenspace is $\\text{span}\\{(1, 0)^T\\}$, which has dimension 1 (Geometric Multiplicity $GM = 1$). Since $GM < AM$, the matrix lacks a full basis of eigenvectors and cannot be diagonalized."
  },
  {
    id: "LA-L-39",
    subtopic: "SVD & Condition Number",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "The condition number $\\kappa(A)$ of an invertible matrix $A$ in the $L_2$-norm is given by:",
    options: [
      "(A) $\\sigma_{\\max} / \\sigma_{\\min}$",
      "(B) $\\sigma_{\\max} \\cdot \\sigma_{\\min}$",
      "(C) $\\det(A) / \\text{Trace}(A)$",
      "(D) $\\lambda_{\\max} - \\lambda_{\\min}$"
    ],
    answer: "Option A ($\\sigma_{\\max} / \\sigma_{\\min}$)",
    shortcut: "Standard formula: $\\kappa_2(A) = \\|A\\|_2 \\|A^{-1}\\|_2 = \\sigma_1 \\cdot \\frac{1}{\\sigma_n} = \\frac{\\sigma_{\\max}}{\\sigma_{\\min}}$.",
    solution: "In numerical linear algebra and optimization, the 2-norm condition number measures numerical stability: $\\kappa(A) = \\|A\\|_2 \\|A^{-1}\\|_2$. Since $\\|A\\|_2 = \\sigma_{\\max}$ and $\\|A^{-1}\\|_2 = 1 / \\sigma_{\\min}$, $\\kappa(A) = \\frac{\\sigma_{\\max}}{\\sigma_{\\min}}$. A large condition number indicates an ill-conditioned system."
  },
  {
    id: "LA-L-40",
    subtopic: "Orthogonal Projections",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "Let $A \\in \\mathbb{R}^{m \\times n}$ have full column rank ($n$). The orthogonal projection matrix $P$ onto the column space of $A$ is given by:",
    options: [
      "(A) $P = A (A^T A)^{-1} A^T$",
      "(B) $P = A^T (A A^T)^{-1} A$",
      "(C) $P = (A^T A)^{-1} A^T$",
      "(D) $P = A A^T$"
    ],
    answer: "Option A ($P = A(A^T A)^{-1} A^T$)",
    shortcut: "Normal equations in Least Squares regression: $\\hat{x} = (A^T A)^{-1} A^T b \\implies P b = A \\hat{x} = A(A^T A)^{-1} A^T b$.",
    solution: "The projection of vector $b$ onto the subspace spanned by columns of $A$ minimizes $\\|b - Ax\\|^2$. Setting the gradient to zero yields the normal equations $A^T A x = A^T b$. Since $A$ has full column rank, $A^T A$ is invertible, giving $\\hat{x} = (A^T A)^{-1} A^T b$. The projected vector is $p = A \\hat{x} = A(A^T A)^{-1} A^T b$. Thus the projection matrix is $P = A(A^T A)^{-1} A^T$. Notice $P^2 = P$ and $P^T = P$ (symmetric idempotent)."
  },
  {
    id: "LA-L-41",
    subtopic: "Spectral Theorem",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "Every real symmetric matrix $A \\in \\mathbb{R}^{n \\times n}$ can be orthogonally diagonalized as $A = Q \\Lambda Q^T$, where:",
    options: [
      "(A) $Q$ is orthogonal ($Q^T Q = I$) and $\\Lambda$ is a real diagonal matrix of eigenvalues.",
      "(B) $Q$ is an upper triangular matrix.",
      "(C) $\\Lambda$ has complex conjugate pairs on its diagonal.",
      "(D) $Q$ is idempotent."
    ],
    answer: "Option A",
    shortcut: "The Fundamental Spectral Theorem of Linear Algebra.",
    solution: "By the Spectral Theorem, every real symmetric matrix has exclusively real eigenvalues and a complete orthonormal set of $n$ eigenvectors. Assembling these eigenvectors into matrix $Q$ ensures $Q^{-1} = Q^T$ and $A = Q \\Lambda Q^T$."
  },
  {
    id: "LA-L-42",
    subtopic: "Vector Spaces",
    source: "GATE DA 2024 / MA",
    marks: 1,
    type: "NAT",
    statement: "Let $W$ be a 3-dimensional subspace of $\\mathbb{R}^7$. What is the dimension of the orthogonal complement $W^\\perp$?",
    options: [],
    answer: "4",
    shortcut: "Formula: $\\dim(W) + \\dim(W^\\perp) = n \\implies 3 + \\dim(W^\\perp) = 7 \\implies 4$.",
    solution: "For any subspace $W$ of an inner product space $V$ with finite dimension $n$, $\\dim(W) + \\dim(W^\\perp) = \\dim(V)$. Here $V = \\mathbb{R}^7$ ($n = 7$) and $\\dim(W) = 3$. Therefore $\\dim(W^\\perp) = 7 - 3 = 4$."
  },
  {
    id: "LA-L-43",
    subtopic: "Fundamental Subspaces",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "For any real matrix $A \\in \\mathbb{R}^{m \\times n}$, which of the following pairs of fundamental subspaces are <strong>orthogonal complements</strong> of each other in $\\mathbb{R}^n$?",
    options: [
      "(A) $\\text{Row}(A)$ and $\\text{Null}(A)$",
      "(B) $\\text{Col}(A)$ and $\\text{Null}(A)$",
      "(C) $\\text{Row}(A)$ and $\\text{Col}(A)$",
      "(D) $\\text{Null}(A)$ and $\\text{Null}(A^T)$"
    ],
    answer: "Option A",
    shortcut: "Fundamental Theorem of Linear Algebra: In $\\mathbb{R}^n$, $(\\text{Row}(A))^\\perp = \\text{Null}(A)$.",
    solution: "The equation $Ax = 0$ states that the dot product of every row of $A$ with vector $x$ is 0. This means every vector in $\\text{Null}(A)$ is orthogonal to every vector in $\\text{Row}(A)$. Since $\\dim(\\text{Row}(A)) + \\dim(\\text{Null}(A)) = r + (n - r) = n$, they are orthogonal complements in $\\mathbb{R}^n$."
  },
  {
    id: "LA-L-44",
    subtopic: "Nilpotent Matrices",
    source: "GATE CS 2013",
    marks: 1,
    type: "MCQ",
    statement: "Let $N$ be a non-zero $n \\times n$ nilpotent matrix (i.e., $N^k = 0$ for some positive integer $k$). Which of the following is TRUE?",
    options: [
      "(A) $\\det(N) = 1$",
      "(B) All eigenvalues of $N$ are 0.",
      "(C) $N$ is invertible.",
      "(D) $N$ is always diagonalizable."
    ],
    answer: "Option B (All eigenvalues are 0)",
    shortcut: "$N v = \\lambda v \\implies N^k v = \\lambda^k v = 0 \\implies \\lambda^k = 0 \\implies \\lambda = 0$.",
    solution: "If $\\lambda$ is an eigenvalue of $N$, then $\\lambda^k$ is an eigenvalue of $N^k = 0$, which forces $\\lambda^k = 0 \\implies \\lambda = 0$. Thus all eigenvalues are 0. Consequently, $\\det(N) = 0$ and $\\text{Trace}(N) = 0$. Since $N \\neq 0$, it cannot be diagonalizable (if it were diagonalizable with all 0 eigenvalues, $N$ would be the zero matrix)."
  },
  {
    id: "LA-L-45",
    subtopic: "Similar Matrices",
    source: "GATE CS 2017",
    marks: 1,
    type: "MSQ",
    statement: "Let $A$ and $B$ be similar matrices ($B = P^{-1} A P$ for some invertible matrix $P$). Which of the following invariants is/are ALWAYS preserved between $A$ and $B$?",
    options: [
      "(A) Eigenvalues",
      "(B) Determinant",
      "(C) Trace",
      "(D) Eigenvectors"
    ],
    answer: "Options A, B, C",
    shortcut: "Similar matrices share characteristic polynomials, hence same eigenvalues, det, and trace. Eigenvectors change ($v_B = P^{-1} v_A$).",
    solution: "1. $\\det(B) = \\det(P^{-1} A P) = \\det(P^{-1})\\det(A)\\det(P) = \\det(A)$ (Preserved).\n2. $\\text{Trace}(B) = \\text{Trace}(P^{-1} A P) = \\text{Trace}(A P P^{-1}) = \\text{Trace}(A)$ (Preserved).\n3. Characteristic polynomial: $\\det(B - \\lambda I) = \\det(P^{-1}(A - \\lambda I)P) = \\det(A - \\lambda I)$ (Identical eigenvalues).\n4. Eigenvectors: If $A v = \\lambda v$, then $B(P^{-1} v) = P^{-1} A P (P^{-1} v) = P^{-1} A v = \\lambda (P^{-1} v)$. The eigenvector of $B$ is $P^{-1} v$, not $v$."
  },
  {
    id: "LA-L-46",
    subtopic: "Rayleigh Quotient",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "For a real symmetric matrix $A$ with minimum eigenvalue $\\lambda_{\\min}$ and maximum eigenvalue $\\lambda_{\\max}$, the Rayleigh quotient $R(x) = \\frac{x^T A x}{x^T x}$ for any non-zero vector $x$ satisfies:",
    options: [
      "(A) $\\lambda_{\\min} \\le R(x) \\le \\lambda_{\\max}$",
      "(B) $0 \\le R(x) \\le 1$",
      "(C) $R(x) = \\text{Trace}(A)$",
      "(D) $R(x) \\ge \\det(A)$"
    ],
    answer: "Option A",
    shortcut: "Min-Max theorem: The bounds of the Rayleigh quotient are precisely the smallest and largest eigenvalues.",
    solution: "Express $x$ in the orthonormal eigenvector basis $x = \\sum c_i q_i$. Then $x^T A x = \\sum \\lambda_i c_i^2$ and $x^T x = \\sum c_i^2$. Since $\\lambda_{\\min} \\le \\lambda_i \\le \\lambda_{\\max}$, we have $\\lambda_{\\min} \\sum c_i^2 \\le \\sum \\lambda_i c_i^2 \\le \\lambda_{\\max} \\sum c_i^2$, establishing $\\lambda_{\\min} \\le R(x) \\le \\lambda_{\\max}$."
  },
  {
    id: "LA-L-47",
    subtopic: "SVD & Low Rank Approx",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "According to the Eckart-Young-Mirsky theorem, the best rank-$k$ approximation $A_k$ of a matrix $A = \\sum_{i=1}^r \\sigma_i u_i v_i^T$ that minimizes the reconstruction error $\\|A - A_k\\|_2$ is obtained by:",
    options: [
      "(A) Truncating the SVD sum to the first $k$ singular components: $\\sum_{i=1}^k \\sigma_i u_i v_i^T$.",
      "(B) Taking the first $k$ rows of $A$.",
      "(C) Applying Gram-Schmidt to the first $k$ columns.",
      "(D) Setting the diagonal elements of $A$ to zero."
    ],
    answer: "Option A",
    shortcut: "PCA / Truncated SVD retains the top $k$ largest singular values to minimize approximation error.",
    solution: "The Eckart-Young theorem states that the optimal rank-$k$ approximation in both spectral and Frobenius norms is obtained by retaining the $k$ largest singular values and setting the remaining singular values to zero: $A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$. The spectral norm error is $\\|A - A_k\\|_2 = \\sigma_{k+1}$."
  },
  {
    id: "LA-L-48",
    subtopic: "Determinants",
    source: "GATE CS 2010",
    marks: 2,
    type: "NAT",
    statement: "What is the determinant of the $4 \\times 4$ circulant permutation matrix $P = \\begin{pmatrix} 0 & 1 & 0 & 0 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\\\ 1 & 0 & 0 & 0 \\end{pmatrix}$?",
    options: [],
    answer: "-1",
    shortcut: "Expanding along column 1 or counting row swaps: 3 row swaps to reach identity matrix $\\implies (-1)^3 = -1$.",
    solution: "Expand along column 1 ($a_{41} = 1$, position row 4, col 1): $\\det(P) = (-1)^{4+1} (1) \\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{vmatrix} = (-1)^5 (1)(1) = -1$."
  },
  {
    id: "LA-L-49",
    subtopic: "Block Inverses",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "If $A$ and $B$ are invertible matrices, the inverse of the block diagonal matrix $M = \\begin{pmatrix} A & 0 \\\\ 0 & B \\end{pmatrix}$ is:",
    options: [
      "(A) $\\begin{pmatrix} A^{-1} & 0 \\\\ 0 & B^{-1} \\end{pmatrix}$",
      "(B) $\\begin{pmatrix} B^{-1} & 0 \\\\ 0 & A^{-1} \\end{pmatrix}$",
      "(C) $\\begin{pmatrix} 0 & A^{-1} \\\\ B^{-1} & 0 \\end{pmatrix}$",
      "(D) $\\frac{1}{|A||B|} \\begin{pmatrix} B & 0 \\\\ 0 & A \\end{pmatrix}$"
    ],
    answer: "Option A",
    shortcut: "Direct block multiplication: $\\begin{pmatrix} A & 0 \\\\ 0 & B \\end{pmatrix} \\begin{pmatrix} A^{-1} & 0 \\\\ 0 & B^{-1} \\end{pmatrix} = \\begin{pmatrix} I & 0 \\\\ 0 & I \\end{pmatrix}$.",
    solution: "For block diagonal matrices, inversion operates independently on each diagonal block: $M^{-1} = \\begin{pmatrix} A^{-1} & 0 \\\\ 0 & B^{-1} \\end{pmatrix}$. This structure is heavily utilized in covariance matrix inversion for independent multivariate distributions."
  },
  {
    id: "LA-L-50",
    subtopic: "Pseudoinverse",
    source: "GATE DA 2024",
    marks: 2,
    type: "MCQ",
    statement: "Let $A = U \\Sigma V^T$ be the SVD of a rank-$r$ matrix $A \\in \\mathbb{R}^{m \\times n}$. The Moore-Penrose pseudoinverse $A^+$ is given by:",
    options: [
      "(A) $A^+ = V \\Sigma^+ U^T$, where $\\Sigma^+$ has reciprocals of non-zero singular values ($1/\\sigma_i$) on its transposed diagonal.",
      "(B) $A^+ = U \\Sigma^+ V^T$",
      "(C) $A^+ = (A^T A)^{-1}$",
      "(D) $A^+ = V \\Sigma U^T$"
    ],
    answer: "Option A",
    shortcut: "To invert $A = U \\Sigma V^T$, reverse the orthogonal factors: $(U \\Sigma V^T)^+ = (V^T)^+ \\Sigma^+ U^+ = V \\Sigma^+ U^T$.",
    solution: "The Moore-Penrose pseudoinverse satisfies the 4 Penrose conditions: $A A^+ A = A$, $A^+ A A^+ = A^+$, $(A A^+)^T = A A^+$, and $(A^+ A)^T = A^+ A$. In terms of SVD, $A^+ = V \\Sigma^+ U^T$, where $\\Sigma^+$ is an $n \\times m$ matrix containing $1/\\sigma_i$ at diagonal entries for all non-zero singular values and zeros elsewhere."
  }
];

// --- 50 PRACTICE PROBLEMS (WITH HINTS & HIDDEN ANSWERS) ---
const module1_practice_problems = [
  {
    id: "LA-P-01",
    subtopic: "Determinants",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "If $A$ is a $4 \\times 4$ matrix with $\\det(A) = -3$, what is the value of $\\det(-2A)$?",
    hint: "Use the scalar multiplication rule $\\det(kA) = k^n \\det(A)$ with $n = 4$ and $k = -2$.",
    final_answer: "-48",
    explanation: "$\\det(-2A) = (-2)^4 \\det(A) = 16 \\times (-3) = -48$."
  },
  {
    id: "LA-P-02",
    subtopic: "Determinants",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "Let $A$ be a $3 \\times 3$ matrix with $\\det(A) = 4$. What is the value of $\\det(A^3 \\cdot \\text{adj}(A))$?",
    hint: "Use $\\det(X Y) = \\det(X)\\det(Y)$, $\\det(A^3) = |A|^3$, and $|\\text{adj}(A)| = |A|^{n-1}$.",
    final_answer: "1024",
    explanation: "$\\det(A^3 \\text{adj}(A)) = |A|^3 \\cdot |A|^{3-1} = |A|^5 = 4^5 = 1024$."
  },
  {
    id: "LA-P-03",
    subtopic: "Matrix Rank",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "Let $u = (1, 2, 3, 4)^T$ and $v = (2, 4, 6, 8)^T$. What is the rank of the $4 \\times 4$ matrix $M = u v^T$?",
    hint: "Recall the rank of any outer product of non-zero vectors $u v^T$.",
    final_answer: "1",
    explanation: "Any outer product $u v^T$ has rank 1 because every column is a scalar multiple of vector $u$."
  },
  {
    id: "LA-P-04",
    subtopic: "Rank & Nullity",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "A linear transformation $T: \\mathbb{R}^6 \\to \\mathbb{R}^4$ is represented by a $4 \\times 6$ matrix of rank 3. What is the dimension of the kernel (null space) of $T$?",
    hint: "Apply the Rank-Nullity Theorem: $\\text{Rank} + \\text{Nullity} = \\text{dim(domain)}$.",
    final_answer: "3",
    explanation: "Domain dimension $n = 6$. Rank $= 3$. $\\text{Nullity} = 6 - 3 = 3$."
  },
  {
    id: "LA-P-05",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "The trace of a $3 \\times 3$ matrix is 11 and its determinant is 36. If two of its eigenvalues are 2 and 3, what is the third eigenvalue?",
    hint: "Trace is the sum of eigenvalues: $\\lambda_1 + \\lambda_2 + \\lambda_3 = \\text{Trace}$.",
    final_answer: "6",
    explanation: "$\\lambda_3 = 11 - (2 + 3) = 6$. Check product: $2 \\times 3 \\times 6 = 36$, perfectly matches determinant."
  },
  {
    id: "LA-P-06",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 2,
    type: "MCQ",
    statement: "If $\\lambda$ is an eigenvalue of an invertible matrix $A$, what is the corresponding eigenvalue of $A^2 + 2A^{-1}$?",
    options: [
      "(A) $\\lambda^2 + 2/\\lambda$",
      "(B) $\\lambda^2 + 2\\lambda$",
      "(C) $2\\lambda^2 + 1/\\lambda$",
      "(D) $(\\lambda + 2)^2$"
    ],
    hint: "Use the spectral mapping theorem for polynomials and rational functions of $A$.",
    final_answer: "Option A ($\\lambda^2 + 2/\\lambda$)",
    explanation: "If $A v = \\lambda v$, then $A^2 v = \\lambda^2 v$ and $A^{-1} v = \\frac{1}{\\lambda} v$. Thus $(A^2 + 2A^{-1}) v = (\\lambda^2 + 2/\\lambda) v$."
  },
  {
    id: "LA-P-07",
    subtopic: "Systems of Equations",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "For what value of $\\lambda$ does the system $x + y + z = 6$, $x + 2y + 3z = 10$, $x + 2y + \\lambda z = 12$ have NO solution?",
    hint: "Find when $\\text{Rank}(A) = 2$ while $\\text{Rank}([A|b]) = 3$. Compare rows 2 and 3.",
    final_answer: "3",
    explanation: "If $\\lambda = 3$, LHS of row 3 is identical to LHS of row 2 ($x + 2y + 3z$), but RHS is $12 \\neq 10$. Contradiction! Hence inconsistent."
  },
  {
    id: "LA-P-08",
    subtopic: "SVD",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "Let $A$ be a $2 \\times 2$ matrix with singular values $\\sigma_1 = 5$ and $\\sigma_2 = 2$. What is the absolute value of the determinant $|\\det(A)|$?",
    hint: "$|\\det(A)|$ equals the product of all singular values $\\prod \\sigma_i$.",
    final_answer: "10",
    explanation: "$|\\det(A)| = \\sigma_1 \\cdot \\sigma_2 = 5 \\times 2 = 10$."
  },
  {
    id: "LA-P-09",
    subtopic: "Quadratic Forms",
    source: "GATE DA Practice",
    marks: 2,
    type: "MCQ",
    statement: "The quadratic form $Q(x, y) = 2x^2 + 2xy + 2y^2$ is:",
    options: [
      "(A) Positive definite",
      "(B) Negative definite",
      "(C) Positive semi-definite",
      "(D) Indefinite"
    ],
    hint: "Write matrix $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$ and check leading principal minors.",
    final_answer: "Option A (Positive definite)",
    explanation: "$D_1 = 2 > 0$. $D_2 = \\det(A) = 4 - 1 = 3 > 0$. All leading principal minors are positive, so positive definite."
  },
  {
    id: "LA-P-10",
    subtopic: "Vector Spaces",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the dimension of the subspace $W = \\{(x_1, x_2, x_3, x_4) \\in \\mathbb{R}^4 \\mid x_1 + x_2 = 0 \\text{ and } x_3 - x_4 = 0\\}$?",
    hint: "Dimension equals number of variables minus number of linearly independent constraints ($n - k$).",
    final_answer: "2",
    explanation: "Variables $n = 4$. Two independent linear constraints $\\implies \\dim(W) = 4 - 2 = 2$."
  },
  {
    id: "LA-P-11",
    subtopic: "Determinants",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "If $A$ is a $3 \\times 3$ matrix such that $\\det(2A) = 32$, what is $\\det(A)$?",
    hint: "Use $\\det(2A) = 2^3 \\det(A) = 8 \\det(A)$.",
    final_answer: "4",
    explanation: "$8 \\det(A) = 32 \\implies \\det(A) = 4$."
  },
  {
    id: "LA-P-12",
    subtopic: "Determinants",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "If $A$ is an invertible matrix and $A^2 = A$, then $\\det(A)$ must be:",
    options: ["(A) 0", "(B) 1", "(C) -1", "(D) 2"],
    hint: "Take determinant of both sides: $|A|^2 = |A|$. Remember $A$ is invertible!",
    final_answer: "Option B (1)",
    explanation: "$|A|^2 = |A| \\implies |A|(|A| - 1) = 0$. Since $A$ is invertible, $|A| \\neq 0$, so $|A| = 1$."
  },
  {
    id: "LA-P-13",
    subtopic: "Rank",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the rank of the $3 \\times 3$ all-ones matrix $J = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$?",
    hint: "All rows are identical multiples of $(1, 1, 1)$.",
    final_answer: "1",
    explanation: "Since all rows are identical, row reduction immediately yields two zero rows. Rank is 1."
  },
  {
    id: "LA-P-14",
    subtopic: "Rank & Nullity",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "If a $5 \\times 8$ matrix $A$ has rank 4, what is the dimension of the null space $\\text{Null}(A)$?",
    hint: "Column count is 8. $\\text{Rank} + \\text{Nullity} = 8$.",
    final_answer: "4",
    explanation: "$\\text{Nullity} = 8 - 4 = 4$."
  },
  {
    id: "LA-P-15",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the product of the eigenvalues of $M = \\begin{pmatrix} 5 & 2 \\\\ 3 & 4 \\end{pmatrix}$?",
    hint: "Product of eigenvalues equals the determinant $\\det(M)$.",
    final_answer: "14",
    explanation: "Product $= \\det(M) = (5)(4) - (2)(3) = 20 - 6 = 14$."
  },
  {
    id: "LA-P-16",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the sum of the eigenvalues of $M = \\begin{pmatrix} 7 & -2 & 1 \\\\ 0 & 3 & 4 \\\\ 0 & 0 & -2 \\end{pmatrix}$?",
    hint: "Sum of eigenvalues equals trace (sum of diagonal entries).",
    final_answer: "8",
    explanation: "Sum $= \\text{Trace} = 7 + 3 + (-2) = 8$."
  },
  {
    id: "LA-P-17",
    subtopic: "LU Decomposition",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "In Doolittle's LU decomposition of $A = \\begin{pmatrix} 3 & 1 \\\\ 6 & 5 \\end{pmatrix}$, what is the value of multiplier $l_{21}$ in matrix $L$?",
    hint: "$l_{21} = a_{21} / u_{11} = 6 / 3$.",
    final_answer: "2",
    explanation: "To eliminate $a_{21}=6$ using $a_{11}=3$, the multiplier is $6 / 3 = 2$."
  },
  {
    id: "LA-P-18",
    subtopic: "Systems of Equations",
    source: "GATE CS Practice",
    marks: 2,
    type: "MCQ",
    statement: "A system of $n$ linear equations in $n$ variables $Ax = b$ has a unique solution if and only if:",
    options: [
      "(A) $\\det(A) \\neq 0$",
      "(B) $\\text{Rank}(A) < n$",
      "(C) $b = 0$",
      "(D) $A$ is symmetric"
    ],
    hint: "Invertible coefficient matrix implies $x = A^{-1} b$ is unique.",
    final_answer: "Option A ($\\det(A) \\neq 0$)",
    explanation: "A unique solution exists iff $\\text{Rank}(A) = \\text{Rank}([A|b]) = n$, which is equivalent to $A$ being invertible ($\\det(A) \\neq 0$)."
  },
  {
    id: "LA-P-19",
    subtopic: "SVD",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the smallest singular value of the identity matrix $I_4$?",
    hint: "All eigenvalues of $I_4$ are 1.",
    final_answer: "1",
    explanation: "For the identity matrix, all singular values are $\\sqrt{1} = 1$."
  },
  {
    id: "LA-P-20",
    subtopic: "SVD",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "If $A = \\begin{pmatrix} 0 & 3 \\\\ 4 & 0 \\end{pmatrix}$, what is the spectral norm $\\|A\\|_2$?",
    hint: "Spectral norm is the largest singular value $\\sigma_1$. Calculate eigenvalues of $A^T A$.",
    final_answer: "4",
    explanation: "$A^T A = \\begin{pmatrix} 16 & 0 \\\\ 0 & 9 \\end{pmatrix}$. Eigenvalues are 16 and 9. Largest singular value is $\\sqrt{16} = 4$."
  },
  {
    id: "LA-P-21",
    subtopic: "Idempotent Matrices",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "If $P$ is an idempotent matrix with $\\text{Trace}(P) = 5$, what is the rank of $P$?",
    hint: "Recall the identity: For any idempotent matrix, $\\text{Trace}(P) = \\text{Rank}(P)$.",
    final_answer: "5",
    explanation: "Since eigenvalues of idempotent matrices are only 0 and 1, $\\text{Trace}(P) = \\sum \\lambda_i = 1 \\times (\\text{count of 1s}) = \\text{Rank}(P) = 5$."
  },
  {
    id: "LA-P-22",
    subtopic: "Orthogonal Matrices",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "If $Q$ is an orthogonal matrix, what is $Q^{-1}$?",
    options: ["(A) $Q^T$", "(B) $-Q$", "(C) $Q$", "(D) $I$"],
    hint: "By definition: $Q^T Q = I$.",
    final_answer: "Option A ($Q^T$)",
    explanation: "$Q^T Q = I \\implies Q^{-1} = Q^T$."
  },
  {
    id: "LA-P-23",
    subtopic: "Cayley-Hamilton",
    source: "GATE CS Practice",
    marks: 2,
    type: "MCQ",
    statement: "The characteristic equation of a matrix $A$ is $\\lambda^2 - 4\\lambda - 5 = 0$. What is $A^{-1}$?",
    options: [
      "(A) $\\frac{1}{5}(A - 4I)$",
      "(B) $\\frac{1}{5}(4I - A)$",
      "(C) $A - 4I$",
      "(D) $5(A + 4I)$"
    ],
    hint: "By Cayley-Hamilton: $A^2 - 4A - 5I = 0 \\implies 5I = A^2 - 4A$. Multiply by $A^{-1}$.",
    final_answer: "Option A ($\\frac{1}{5}(A - 4I)$)",
    explanation: "$5I = A(A - 4I) \\implies 5 A^{-1} = A - 4I \\implies A^{-1} = \\frac{1}{5}(A - 4I)$."
  },
  {
    id: "LA-P-24",
    subtopic: "Vector Spaces",
    source: "GATE DA Practice",
    marks: 2,
    type: "MCQ",
    statement: "Are the vectors $u = (1, 0, 1)$, $v = (1, 1, 0)$, $w = (0, 1, 1)$ linearly independent in $\\mathbb{R}^3$?",
    options: ["(A) Yes, they form a basis of $\\mathbb{R}^3$", "(B) No, they are linearly dependent", "(C) They span only a 2D plane", "(D) Cannot be determined"],
    hint: "Check the determinant of the matrix formed by placing $u, v, w$ as columns.",
    final_answer: "Option A (Yes, basis of $\\mathbb{R}^3$)",
    explanation: "$\\det \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{pmatrix} = 1(1) - 1(-1) = 2 \\neq 0$. Full rank 3, hence linearly independent basis."
  },
  {
    id: "LA-P-25",
    subtopic: "Quadratic Forms",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "For what value of $c$ does the matrix $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & c \\end{pmatrix}$ cease to be positive definite?",
    hint: "Positive definiteness requires $\\det(A) = c - 4 > 0$.",
    final_answer: "4",
    explanation: "At $c = 4$, $\\det(A) = 0$ (positive semi-definite). For $c \\le 4$, it is not positive definite."
  },
  {
    id: "LA-P-26",
    subtopic: "Determinants",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the determinant of the upper triangular matrix $T = \\begin{pmatrix} 2 & 9 & 13 \\\\ 0 & -3 & 8 \\\\ 0 & 0 & 5 \\end{pmatrix}$?",
    hint: "Determinant of any triangular matrix is simply the product of its diagonal entries.",
    final_answer: "-30",
    explanation: "$\\det(T) = (2)(-3)(5) = -30$."
  },
  {
    id: "LA-P-27",
    subtopic: "Rank",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "If $A$ is $3 \\times 3$ with $\\text{Rank}(A) = 2$ and $B$ is $3 \\times 3$ with $\\text{Rank}(B) = 2$, what is the minimum possible rank of $AB$?",
    hint: "Sylvester's Inequality: $\\text{rank}(AB) \\ge \\text{rank}(A) + \\text{rank}(B) - 3$.",
    final_answer: "1",
    explanation: "$\\text{Rank}(AB) \\ge 2 + 2 - 3 = 1$."
  },
  {
    id: "LA-P-28",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "If $A$ has eigenvalues $1, 2, 3$, what is $\\det(A^2 + I)$?",
    hint: "Eigenvalues of $A^2 + I$ are $\\lambda_i^2 + 1$. Determinant is their product.",
    final_answer: "100",
    explanation: "Eigenvalues are $1^2+1=2$, $2^2+1=5$, $3^2+1=10$. Determinant is $2 \\times 5 \\times 10 = 100$."
  },
  {
    id: "LA-P-29",
    subtopic: "Projections",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "Let $P$ be an orthogonal projection matrix. What is the value of $\\|P\\|_2$ (spectral norm) if $P \\neq 0$?",
    hint: "Eigenvalues of non-zero projection matrix are in $\\{0, 1\\}$. Largest singular value is 1.",
    final_answer: "1",
    explanation: "Since $P$ is symmetric idempotent, singular values are 1 and 0. Maximum singular value is 1."
  },
  {
    id: "LA-P-30",
    subtopic: "Condition Number",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the 2-norm condition number of an orthogonal matrix $Q$?",
    hint: "All singular values of an orthogonal matrix are equal to 1.",
    final_answer: "1",
    explanation: "$\\kappa_2(Q) = \\sigma_{\\max} / \\sigma_{\\min} = 1 / 1 = 1$. Orthogonal matrices are perfectly conditioned."
  },
  {
    id: "LA-P-31",
    subtopic: "Systems of Equations",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "If $Ax = 0$ has only the trivial solution $x = 0$, what can be said about the columns of $A$?",
    options: [
      "(A) They are linearly independent",
      "(B) They are linearly dependent",
      "(C) They span all of $\\mathbb{R}^m$",
      "(D) None of the above"
    ],
    hint: "$Ax = x_1 a_1 + \\dots + x_n a_n = 0 \\implies x_i = 0$.",
    final_answer: "Option A (Linearly independent)",
    explanation: "By definition, a linear combination of columns equaling zero only when all coefficients are zero means columns are linearly independent."
  },
  {
    id: "LA-P-32",
    subtopic: "Trace",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "If $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ and $B = \\begin{pmatrix} 0 & 1 \\\\ -1 & 2 \\end{pmatrix}$, what is $\\text{Trace}(AB - BA)$?",
    hint: "Recall the cyclic property of trace: $\\text{Trace}(AB) = \\text{Trace}(BA)$.",
    final_answer: "0",
    explanation: "$\\text{Trace}(AB - BA) = \\text{Trace}(AB) - \\text{Trace}(BA) = 0$ for ANY two square matrices!"
  },
  {
    id: "LA-P-33",
    subtopic: "Vector Spaces",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "What is the dimension of the subspace of diagonal $4 \\times 4$ matrices?",
    hint: "How many independent entries on the main diagonal?",
    final_answer: "4",
    explanation: "A diagonal $4 \\times 4$ matrix has exactly 4 free parameters on its main diagonal."
  },
  {
    id: "LA-P-34",
    subtopic: "SVD",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "A matrix $A$ has singular values $6, 4, 2, 0$. What is the rank of matrix $A$?",
    hint: "The rank of a matrix equals the number of strictly positive singular values.",
    final_answer: "3",
    explanation: "There are exactly 3 non-zero singular values (6, 4, 2). Hence rank is 3."
  },
  {
    id: "LA-P-35",
    subtopic: "Quadratic Forms",
    source: "GATE DA Practice",
    marks: 2,
    type: "MCQ",
    statement: "If all eigenvalues of a real symmetric matrix $A$ are negative, the quadratic form $x^T A x$ is:",
    options: [
      "(A) Negative definite",
      "(B) Negative semi-definite",
      "(C) Indefinite",
      "(D) Positive definite"
    ],
    hint: "$x^T A x = \\sum \\lambda_i y_i^2 < 0$ for all $x \\neq 0$.",
    final_answer: "Option A (Negative definite)",
    explanation: "All eigenvalues $< 0 \\implies x^T A x < 0$ for all non-zero $x$, which is negative definite."
  },
  {
    id: "LA-P-36",
    subtopic: "Inverses",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "If $A$ is symmetric ($A^T = A$) and invertible, is $A^{-1}$ also symmetric?",
    options: ["(A) Yes, $(A^{-1})^T = A^{-1}$", "(B) No, it becomes skew-symmetric", "(C) Only if $\\det(A) = 1$", "(D) Only if $A = I$"],
    hint: "Take transpose of inverse: $(A^{-1})^T = (A^T)^{-1}$.",
    final_answer: "Option A (Yes)",
    explanation: "$(A^{-1})^T = (A^T)^{-1} = A^{-1}$. Thus the inverse of a symmetric matrix is always symmetric."
  },
  {
    id: "LA-P-37",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "If $A$ is a $2 \\times 2$ matrix with eigenvalues 1 and 3, what is $\\text{Trace}(A^3)$?",
    hint: "Eigenvalues of $A^3$ are $1^3$ and $3^3$. Trace is their sum.",
    final_answer: "28",
    explanation: "$\\text{Trace}(A^3) = 1^3 + 3^3 = 1 + 27 = 28$."
  },
  {
    id: "LA-P-38",
    subtopic: "Gram Matrix",
    source: "GATE DA Practice",
    marks: 2,
    type: "MCQ",
    statement: "For any real matrix $A \\in \\mathbb{R}^{m \\times n}$, the Gram matrix $G = A^T A$ is ALWAYS:",
    options: [
      "(A) Symmetric and positive semi-definite",
      "(B) Skew-symmetric",
      "(C) Orthogonal",
      "(D) Invertible for any $A$"
    ],
    hint: "Check $G^T = (A^T A)^T$ and $x^T G x = \\|Ax\\|^2 \\ge 0$.",
    final_answer: "Option A (Symmetric and positive semi-definite)",
    explanation: "$G^T = A^T A = G$ (symmetric). $x^T G x = x^T A^T A x = \\|Ax\\|^2 \\ge 0$ for all $x$ (positive semi-definite)."
  },
  {
    id: "LA-P-39",
    subtopic: "Diagonalization",
    source: "GATE CS Practice",
    marks: 1,
    type: "MCQ",
    statement: "If an $n \\times n$ matrix has $n$ DISTINCT eigenvalues, is it guaranteed to be diagonalizable?",
    options: [
      "(A) Yes, eigenvectors for distinct eigenvalues are linearly independent",
      "(B) No, it depends on the trace",
      "(C) Only if the matrix is symmetric",
      "(D) Only if all eigenvalues are non-zero"
    ],
    hint: "Distinct eigenvalues imply Geometric Multiplicity = Algebraic Multiplicity = 1 for all eigenvalues.",
    final_answer: "Option A (Yes, guaranteed)",
    explanation: "Eigenvectors corresponding to distinct eigenvalues are always linearly independent, providing a complete basis of $n$ eigenvectors."
  },
  {
    id: "LA-P-40",
    subtopic: "Null Space",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the dimension of the null space of the zero matrix $0_{4 \\times 5}$?",
    hint: "Rank of the zero matrix is 0. Apply Rank-Nullity ($n = 5$).",
    final_answer: "5",
    explanation: "$\\text{Nullity} = n - \\text{Rank} = 5 - 0 = 5$. Every vector in $\\mathbb{R}^5$ is in the null space."
  },
  {
    id: "LA-P-41",
    subtopic: "Determinants",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "What is $\\det(I_3 + u v^T)$ where $u = (1, 1, 1)^T$ and $v = (1, 2, 3)^T$?",
    hint: "Matrix determinant lemma: $\\det(I + u v^T) = 1 + v^T u$.",
    final_answer: "7",
    explanation: "$v^T u = (1)(1) + (2)(1) + (3)(1) = 6$. Determinant $= 1 + 6 = 7$."
  },
  {
    id: "LA-P-42",
    subtopic: "Orthogonality",
    source: "GATE DA Practice",
    marks: 1,
    type: "NAT",
    statement: "For what value of $k$ are the vectors $(2, 3, k)^T$ and $(3, -2, 4)^T$ orthogonal?",
    hint: "Dot product must equal 0: $(2)(3) + (3)(-2) + (k)(4) = 0$.",
    final_answer: "0",
    explanation: "$6 - 6 + 4k = 0 \\implies 4k = 0 \\implies k = 0$."
  },
  {
    id: "LA-P-43",
    subtopic: "LU Decomposition",
    source: "GATE CS Practice",
    marks: 2,
    type: "MCQ",
    statement: "In LU decomposition $A = LU$, what is $\\det(A)$ in terms of $U$ (assuming Doolittle's method)?",
    options: [
      "(A) Product of diagonal elements of $U$",
      "(B) Sum of diagonal elements of $U$",
      "(C) $\\det(L) + \\det(U)$",
      "(D) Always 1"
    ],
    hint: "$\\det(L) = 1$ because $L$ is unit lower triangular.",
    final_answer: "Option A (Product of diagonal elements of $U$)",
    explanation: "$\\det(A) = \\det(L)\\det(U) = (1) \\times \\prod u_{ii} = \\prod u_{ii}$."
  },
  {
    id: "LA-P-44",
    subtopic: "Eigenvalues",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "If $A^3 = A$ and $A$ has no negative eigenvalues, what are the only possible eigenvalues of $A$?",
    hint: "$\\lambda^3 - \\lambda = 0 \\implies \\lambda(\\lambda - 1)(\\lambda + 1) = 0$. Exclude negatives.",
    final_answer: "0, 1",
    explanation: "Roots are $-1, 0, 1$. Since no negative eigenvalues exist, possible values are 0 and 1."
  },
  {
    id: "LA-P-45",
    subtopic: "Rank",
    source: "GATE CS Practice",
    marks: 1,
    type: "NAT",
    statement: "If $A$ is $4 \\times 4$ and $A \\cdot \\text{adj}(A) = 0$ while $A \\neq 0$, what is $\\det(A)$?",
    hint: "Recall $A \\cdot \\text{adj}(A) = |A| I$.",
    final_answer: "0",
    explanation: "$|A| I = 0 \\implies |A| = 0$."
  },
  {
    id: "LA-P-46",
    subtopic: "SVD",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "If a matrix $A$ has singular values $5$ and $3$, what is the Frobenius norm $\\|A\\|_F$?",
    hint: "$\\|A\\|_F = \\sqrt{\\sum \\sigma_i^2} = \\sqrt{5^2 + 3^2}$.",
    final_answer: "5.83 (Exact: $\\sqrt{34}$)",
    explanation: "$\\|A\\|_F = \\sqrt{25 + 9} = \\sqrt{34} \\approx 5.83$."
  },
  {
    id: "LA-P-47",
    subtopic: "Vector Spaces",
    source: "GATE DA Practice",
    marks: 2,
    type: "NAT",
    statement: "What is the dimension of the vector space of all polynomials of degree $\\le 4$ with real coefficients?",
    hint: "Basis is $\\{1, x, x^2, x^3, x^4\\}$. Count the basis elements.",
    final_answer: "5",
    explanation: "The space $P_4$ has basis $\\{1, x, x^2, x^3, x^4\\}$, which contains $4 + 1 = 5$ elements."
  },
  {
    id: "LA-P-48",
    subtopic: "Idempotent Matrices",
    source: "GATE DA Practice",
    marks: 2,
    type: "MCQ",
    statement: "If $P$ is an idempotent matrix, what is $P^{100}$?",
    options: ["(A) $P$", "(B) $100P$", "(C) $I$", "(D) 0"],
    hint: "$P^2 = P \\implies P^3 = P(P^2) = P^2 = P$. By induction, $P^k = P$.",
    final_answer: "Option A ($P$)",
    explanation: "Any power of an idempotent matrix equals itself: $P^k = P$ for all $k \\ge 1$."
  },
  {
    id: "LA-P-49",
    subtopic: "Systems of Equations",
    source: "GATE CS Practice",
    marks: 2,
    type: "NAT",
    statement: "In the system $x + y = 2$ and $2x + 2y = 4$, how many free variables are there?",
    hint: "Number of variables ($n = 2$) minus rank ($r = 1$).",
    final_answer: "1",
    explanation: "$\\text{Rank} = 1$, unknowns $= 2$. Free variables $= 2 - 1 = 1$ (infinitely many solutions along a line)."
  },
  {
    id: "LA-P-50",
    subtopic: "Quadratic Forms",
    source: "GATE DA Practice",
    marks: 2,
    type: "MCQ",
    statement: "The quadratic form $Q(x_1, x_2) = x_1 x_2$ is:",
    options: [
      "(A) Indefinite",
      "(B) Positive definite",
      "(C) Negative definite",
      "(D) Positive semi-definite"
    ],
    hint: "Matrix is $\\begin{pmatrix} 0 & 0.5 \\\\ 0.5 & 0 \\end{pmatrix}$. Eigenvalues are $\\pm 0.5$.",
    final_answer: "Option A (Indefinite)",
    explanation: "Eigenvalues are $+0.5$ and $-0.5$ (one positive, one negative). Therefore the quadratic form takes both positive and negative values, making it indefinite (saddle point at origin)."
  }
];
