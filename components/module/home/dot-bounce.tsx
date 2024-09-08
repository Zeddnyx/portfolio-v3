export default function DotBounce() {
  return (
    <div className="absolute size-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <div className="bg-primary animate-bounce-scale size-20 rounded-full" />
    </div>
  );
}
