import CustomButton from "@/components/CustomButton/CustomButton";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page">
      <CustomButton
        text="Back"
      />

      {children}
    </div>
  )
}