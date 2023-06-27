type Props = {
  progress: number;
};

export default function ProgressBar({ progress }: Props) {
  return (
    <div className="relative">
      <progress className="w-full" value={progress} max="100">
        {progress}%
      </progress>
      <span className="absolute top-0" style={{ left: `${progress}%` }}>
        {progress}%
      </span>
    </div>
  );
}
