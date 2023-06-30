import { ContentProps } from "./ContentSwitcher";

export default function ListContent({ data, loading }: ContentProps) {
  if (loading) return <div>loading...</div>;
  if (!data) return <div>no data</div>;
  return (
    <div>
      {data.list.map((item, idx) => (
        <div key={idx}>{JSON.stringify(item)}</div>
      ))}
    </div>
  );
}
