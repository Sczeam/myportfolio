## Summary
This PR adds a new `Visual story` chapter to the Moethuzar case study and mounts it directly under the overview section.

The issue was that the case study moved from the overview straight into technical proof sections, without the editorial image spread shown in the latest design reference. That made the page skip an important visual proof moment. The requested treatment is not a generic gallery: it is a mounted, art-directed sequence using the same route-specific exception pattern as the other Moethuzar chapters.

The fix introduces a dedicated `visual_story` data block, a new section component, and a matching motion component. The section uses one large focal image followed by two offset secondary frames, all mounted with quiet architectural borders and wide negative space. The images are sourced from `public/images/projects` and placed immediately after the overview chapter to match the requested story order.

## Validation
`pnpm lint`
