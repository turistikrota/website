import Carousel from "~/components/carousel/Carousel";
import { ContentProps } from "../ContentSwitcher";
import ListFilter from "./ListFilter";
import ListHead from "./ListHead";

function ListItemSection({ data, loading }: ContentProps) {
  if (loading) return <div>loading...</div>;
  if (!data) return <div>no data</div>;
  return (
    <section className="grow">
      <div className="">
        <Carousel />
      </div>
      {data.list.map((item, idx) => (
        <div key={idx}>{item.translations.tr.title}</div>
      ))}
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
      <div>aaa</div>
      <br />
    </section>
  );
}

export default function ListContent({ data, loading }: ContentProps) {
  return (
    <section className="max-w-7xl p-4 xl:p-0 mx-auto lg:h-full">
      <ListHead />
      <section className="flex flex-col lg:flex-row gap-4">
        <ListFilter data={data} loading={loading} />
        <ListItemSection data={data} loading={loading} />
      </section>
    </section>
  );
}
