export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-26'

export const dataset = assertValue(
  "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
 "ub3b1e6q",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
