import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type FieldProps = {
  label: string;
  field: InputHTMLAttributes<HTMLInputElement>;
};

function Field({
  label,
  field: { id, ...props },
}: FieldProps) {
  return (
    <div className="w-full">
      <label
        className="text-sm font-bold uppercase tracking-wide text-neutral-50"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        id={id}
        className="
          mt-2 block min-h-12 w-full
          bg-neutral-100 px-4 text-sm
          outline-none transition-colors
          focus:bg-white
        "
        {...props}
      />
    </div>
  );
}

type CheckboxProps = {
  title: string;
  items: Array<{
    id: string;
    label: string;
    name: string;
    value: string;
  }>;
};

function Checkbox({ title, items }: CheckboxProps) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-neutral-50">
        {title}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {items.map(({ label, ...input }) => (
          <div key={input.id}>
            <input
              type="checkbox"
              className="peer hidden"
              {...input}
            />

            <label
              htmlFor={input.id}
              className="
                cursor-pointer
                px-4 py-2 text-sm uppercase
                bg-brand-500 text-brand-50
                transition-all
                peer-checked:bg-accent-600
                peer-checked:text-accent-50
              "
            >
              {label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

type ConsentProps = {
  id: string;
};

function Consent({ id }: ConsentProps) {
  return (
    <div className="mt-4">
      <div className="flex items-start gap-3">
        <input
          id={id}
          name="consent"
          type="checkbox"
          required
          className="
            mt-1 size-4
            accent-accent-500
          "
        />

        <label
          htmlFor={id}
          className="text-sm text-neutral-100 leading-relaxed"
        >
          Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
          <a
            href="/polityka-prywatnosci"
            className="underline text-accent-400 hover:text-accent-300"
          >
            polityką prywatności
          </a>{" "}
          w celu kontaktu i przedstawienia oferty.
        </label>
      </div>
    </div>
  );
}

function Message() {
  return (
    <div className="w-full">
      <label
        className="text-sm font-bold uppercase tracking-wide text-neutral-50"
        htmlFor="message"
      >
        Wiadomość
      </label>

      <textarea
        id="message"
        name="message"
        placeholder="Opisz krótko swój biznes, cele i największe wyzwania…"
        className="
          mt-2 block min-h-40 w-full resize-none
          bg-neutral-100 p-4 text-sm
          outline-none transition-colors
          focus:bg-white
        "
      />
    </div>
  );
}

export default function ContactForm() {
  return (
    <form className="bg-brand-700 h-fit p-5 lg:p-10">
      <h2 className="font-heading text-5xl font-black uppercase text-accent-400 lg:text-6xl">
        Formularz kontaktowy
      </h2>

      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-neutral-50">
        Zwiększ widoczność swojej strony z pomocą strategii SEO,
        AEO, stron internetowych i automatyzacji. Zostaw kontakt,
        a wrócę z rekomendacją najlepszego kierunku działań.
      </p>

      <div className="mt-10 grid gap-x-2 gap-y-4 md:grid-cols-2">
        <Field
          label="Imię i nazwisko"
          field={{
            type: "text",
            name: "fullname",
            id: "fullname",
            placeholder: "Jan Kowalski",
            required: true,
          }}
        />

        <Field
          label="Adres e-mail"
          field={{
            type: "email",
            name: "email",
            id: "email",
            placeholder: "kontakt@firma.pl",
            required: true,
          }}
        />

        <Field
          label="Numer telefonu"
          field={{
            type: "tel",
            name: "phone",
            id: "phone",
            placeholder: "+48 500 000 000",
          }}
        />

        <Field
          label="Adres strony"
          field={{
            type: "url",
            name: "website",
            id: "website",
            placeholder: "https://twojastrona.pl",
          }}
        />

        <div className="md:col-span-2">
          <Field
            label="Temat"
            field={{
              type: "text",
              name: "subject",
              id: "subject",
              placeholder: "Np. SEO dla kancelarii w Poznaniu",
            required: true,
            }}
          />
        </div>

        <div className="md:col-span-2">
          <Checkbox
            title="Kategoria"
            items={[
              {
                id: "seo",
                label: "SEO",
                name: "category",
                value: "seo",
              },
              {
                id: "aeo",
                label: "AEO",
                name: "category",
                value: "aeo",
              },
              {
                id: "www",
                label: "Strony",
                name: "category",
                value: "www",
              },
              {
                id: "ppc",
                label: "PPC",
                name: "category",
                value: "ppc",
              },
              {
                id: "rpa",
                label: "RPA",
                name: "category",
                value: "rpa",
              },
            ]}
          />
        </div>

        <div className="md:col-span-2">
          <Message />
        </div>
      </div>
        <Consent id="policy" />
      <button
        type="submit"
        className="
          mt-8 inline-flex
          bg-accent-500 px-6 py-4
          font-bold uppercase
          text-accent-50
          transition-colors
          hover:bg-accent-600
        "
      >
        Wyślij zapytanie
      </button>
    </form>
  );
}