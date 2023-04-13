type Props = {
  children: React.ReactNode;
  loading: boolean;
};

const Spin: React.FC<Props> = ({ children, loading }) => {
  return (
    <div className={`relative`}>
      {loading && (
        <div className="absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <i className="bx bx-sm text-primary-300 dark:text-primary-200 bx-loader-circle animate-spin"></i>
        </div>
      )}
      <div className={loading ? "opacity-50" : ""}>{children}</div>
    </div>
  );
};

export default Spin;
