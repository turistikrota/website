import DatePicker from "~/components/date-picker/DatePicker";

export default function UI() {
  return (
    <div>
      <h1>UI</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4 hidden lg:block">
        This is a test page for UI components.
      </p>
      <section className="container mx-auto p-4">
        <h1 className="text-2xl font-bold hidden lg:block">Date Picker</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 hidden lg:block">
          This is a test page for Date Picker.
        </p>
        <div className="relative max-w-sm">
          <DatePicker />
        </div>
      </section>
    </div>
  );
}
