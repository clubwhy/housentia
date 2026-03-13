# Mortgage Guide Creation Workflow

200+ 가이드 작성 시 **중복 방지**와 **일관된 내부 링크**를 위한 워크플로우.

---

## 1. 중복 검색 (필수)

새 주제를 받으면 **반드시** 먼저 중복 검색:

```bash
# Cursor에서: "이 주제로 중복 검색해줘" 또는
# mortgage-guides.ts에서 findPotentialDuplicates("주제") 호출
```

**사용 함수:**
```typescript
import { findPotentialDuplicates } from '@/lib/mortgage-guides';
const duplicates = findPotentialDuplicates("What is Escrow");
// 결과가 있으면 → 기존 글이 있음. 사용자에게 알리고 중단.
```

**중복 판단 기준:**
- slug 유사 (what-is-escrow vs escrow-explained)
- title/description에 핵심 키워드 포함
- keywords 배열에 매칭 (있을 경우)

**추가: keywords** 필드로 검색 정확도 향상. 예:
```typescript
{ slug: 'what-is-escrow', keywords: ['escrow', '에스크로', 'escrow account'] }
```

---

## 2. 카테고리 매핑

| 카테고리 (slug) | 포함 주제 예시 |
|-----------------|----------------|
| **basics** | DTI, LTV, Amortization, PITI |
| **process** | Loan Estimate, Closing Disclosure, application steps |
| **loan-types** | FHA, VA, Conventional, USDA, Jumbo, HELOC, Non-QM |
| **refinance** | Refinance, Cash-out, Rate-and-term |
| **home-buying** | First-time buyer, Down payment, Finding loan |
| **costs** | Closing costs, PMI, Points, Escrow |
| **rates** | APR, Rate lock, Today's rates |
| **credit** | Prequalify, Self-employed, Credit score |

**사용 함수:**
```typescript
import { suggestCategory } from '@/lib/mortgage-guides';
const category = suggestCategory("What is Escrow"); // → 'costs'
```

---

## 3. 새 글 생성

1. **페이지 생성:** `src/app/mortgage/[slug]/page.tsx`
2. **mortgage-guides.ts 등록:**
   ```typescript
   {
     slug: 'what-is-escrow',
     title: 'What is Escrow',
     description: '...',
     category: 'costs',
     relatedSlugs: ['what-is-closing-costs', 'what-is-loan-estimate', ...],
     keywords: ['escrow', '에스크로'],
   }
   }
   ```

3. **relatedSlugs 추천:**
   ```typescript
   import { suggestRelatedForNewArticle } from '@/lib/mortgage-guides';
   const related = suggestRelatedForNewArticle('costs', 4);
   ```

---

## 4. 내부 링크 (양방향)

새 글의 relatedSlugs에 포함된 기존 글들 → 해당 글의 relatedSlugs에 **새 글 slug 추가**.

예: `what-is-escrow`의 relatedSlugs에 `what-is-closing-costs`가 있으면  
→ `what-is-closing-costs`의 relatedSlugs에 `what-is-escrow` 추가.

---

## 5. 사용자 프롬프트 예시

```
"에스크로(escrow) 가이드 만들어줘"
→ 1) 중복 검색 2) 카테고리 costs 3) 페이지 생성 4) 내부 링크
```

```
"What is Escrow 글 작성해줘"
→ 동일 워크플로우
```

---

## 6. Cursor Rule

`.cursor/rules/mortgage-guide-create.mdc`에 이 워크플로우가 정의되어 있음.  
`src/app/mortgage/**/*.tsx` 또는 `mortgage-guides.ts` 작업 시 자동 적용됨.

---

## 7. 참고

- **SEO-ARCHITECTURE.md**: 전체 토픽 맵, 100+ 예정 페이지 목록
- **mortgage-guides.ts**: `CATEGORY_HINTS`, `findPotentialDuplicates`, `suggestRelatedForNewArticle`
