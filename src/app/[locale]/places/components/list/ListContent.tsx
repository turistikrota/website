import { ContentProps } from "../ContentSwitcher";
import ListFilter from "./ListFilter";

function ListItemSection({ data, loading }: ContentProps) {
  if (loading) return <div>loading...</div>;
  if (!data) return <div>no data</div>;
  return (
    <section className="col-span-12 lg:col-span-9 bg-blue-800">
      {data.list.map((item, idx) => (
        <div key={idx}>{JSON.stringify(item)}</div>
      ))}
    </section>
  );
}

export default function ListContent({ data, loading }: ContentProps) {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-12 gap-4 lg:h-full">
      <ListFilter data={data} loading={loading} />
      <ListItemSection data={data} loading={loading} />
    </section>
  );
}
