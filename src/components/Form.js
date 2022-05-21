function Form({
  isPending,
  textAreaText,
  handleChange,
  presetButton,
  handleSubmit,
  attempts,
}) {
  return (
    <div className="w-full max-w-3xl border-b	border-solid border-gray-300">
      <form
        className="bg-white rounded px-8 pt-6 pb-8 mb-16"
        onSubmit={handleSubmit}
      >
        <fieldset className="disabled:opacity-40" disabled={!attempts}>
          <div className="mb-4">
            <div className="flex justify-between">
              <label
                className="block text-gray-500 text-sm font-bold mb-2 text-left"
                htmlFor="prompt"
              >
                Enter prompt
              </label>{" "}
              {!attempts && (
                <span className="text-gray-500 text-sm font-bold mb-2">
                  Click my name in the header to reset your attempts 😅
                </span>
              )}
              <span className="text-gray-500 text-sm font-bold mb-2">
                Max attempts: {attempts}{" "}
              </span>
            </div>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
              id="prompt"
              rows={7}
              placeholder="Write a tagline for an ice cream shop."
              value={textAreaText}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            {!isPending && (
              <button
                disabled={!textAreaText}
                className="bg-emerald-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-40 disabled:bg-emerald-700"
                type="submit"
              >
                Submit
              </button>
            )}
            {isPending && (
              <button
                disabled
                className="bg-emerald-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-40 disabled:bg-emerald-700"
                type="submit"
              >
                Submitting Prompt...
              </button>
            )}

            <span className="flex-1"></span>
            <button
              className="inline-block align-baseline font-bold text-sm text-emerald-700 underline hover:text-emerald-900 hover:no-underline"
              type="button"
              onClick={() => presetButton("Are there more doors or wheels?")}
            >
              Preset 1
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-emerald-700 underline hover:text-emerald-900 hover:no-underline"
              type="button"
              onClick={() => presetButton("Shopify is...")}
            >
              Preset 2
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-emerald-700 underline hover:text-emerald-900 hover:no-underline"
              type="button"
              onClick={() =>
                presetButton("Write a poem about dinosaurs in the snow")
              }
            >
              Preset 3
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
