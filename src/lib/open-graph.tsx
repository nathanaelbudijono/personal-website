type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
};
export function openGraph({
  siteName,
  templateTitle,
  description,
  logo = "https://nathanaelbudijono.vercel.app/logo.png",
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://nathanaelbudijono.vercel.app/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}&theme=light${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""
  }`;
}

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== "undefined") {
    return sessionStorage.getItem(key);
  }
  return null;
}
