import { FormData } from "@/models/Form.model";

export async function getInitialFormData(): Promise<Partial<FormData>> {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/form`, {
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch initial form data");
    }
    const data: Partial<FormData> = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching initial form data:", error);
    return {};
  }
}
