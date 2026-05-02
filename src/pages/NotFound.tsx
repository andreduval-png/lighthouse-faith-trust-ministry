import { ButtonLink } from "../components/ButtonLink";

export function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="container-padded text-center">
        <p className="text-sm font-bold uppercase text-gold-500">Page not found</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-navy-950">This page is not available.</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/75">
          The page may have moved, or the address may be incomplete.
        </p>
        <div className="mt-8">
          <ButtonLink to="/" variant="secondary">
            Return Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
