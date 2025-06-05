interface PropertyMapProps {
  lat?: number
  lng?: number
  title?: string
}

export function PropertyMap({ lat = 49.2827, lng = -123.1207, title = "Property" }: PropertyMapProps) {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${lat},${lng}`

  return (
    <div className="aspect-[16/9] rounded-lg overflow-hidden">
      <iframe
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapSrc}
      ></iframe>
    </div>
  )
}