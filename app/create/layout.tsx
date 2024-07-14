export default function ResumeBuilderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
      {children}
    </div>
  );
}
