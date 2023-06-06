type LoadingType = React.FC & {
  Content: React.FC;
};

const Loading: LoadingType = () => {
  return <></>;
};

const Content: React.FC = () => {
  return (
    <div role="status" className="ease-out">
      Loading...
    </div>
  );
};

Loading.Content = Content;

export default Loading;
