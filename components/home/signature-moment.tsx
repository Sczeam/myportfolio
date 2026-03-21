import { Container } from "@/components/ui/container";

export function SignatureMoment() {
  return (
    <section
      data-signature-moment
      className="relative overflow-clip pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-[9rem] lg:pt-[4rem]"
      aria-labelledby="signature-moment-heading"
    >
      <div className="absolute inset-0" data-signature-moment-atmosphere>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,17,0.96)_0%,rgba(14,15,17,1)_56%,rgba(20,22,26,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(180deg,rgba(243,240,234,0)_0%,rgba(243,240,234,0.07)_100%)] blur-[14px]" />
      </div>

      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="flex min-h-[34rem] items-end justify-center pb-8 sm:min-h-[38rem] sm:pb-10 lg:min-h-[42rem] lg:pb-[3.5rem]">
          <div
            className="block overflow-hidden pb-4 lg:pb-6"
            data-signature-moment-mask
          >
            <h2
              id="signature-moment-heading"
              className="font-display text-[clamp(4.25rem,9vw,7.75rem)] italic leading-[0.92] tracking-[-0.05em] text-text-primary"
              data-signature-moment-text
            >
              Silent. Secured.
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}
