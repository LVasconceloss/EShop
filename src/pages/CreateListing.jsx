import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUserProduct } from '../data/userProducts.js';

export default function CreateListing() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleFiles(files) {
    const arr = Array.from(files).slice(0, 8); // limit to 8 images
    const dataUrls = await Promise.all(
      arr.map(file => new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
      }))
    );
    setImages(prev => [...prev, ...dataUrls]);
  }

  function removeImage(idx) {
    setImages(prev => prev.filter((_, i) => i !== idx));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !price) return;
    setLoading(true);
    const id = `u-${Date.now()}`;
    const product = {
      id,
      name: name.trim(),
      price: Number(price),
      description: description.trim(),
      images: images.length ? images : ["https://picsum.photos/seed/placeholder/800/600"],
      isUserListing: true,
      createdAt: Date.now(),
    };
    addUserProduct(product);
    setLoading(false);
    navigate(`/products/${id}`);
  }

  return (
    <section className="sell">
      <h2>Anunciar produto</h2>
      <form className="form" onSubmit={onSubmit}>
        <label>
          Título do anúncio
          <input value={name} onChange={e => setName(e.target.value)} required maxLength={80} />
        </label>
        <label>
          Preço (R$)
          <input type="number" inputMode="decimal" step="0.01" min="0" value={price} onChange={e => setPrice(e.target.value)} required />
        </label>
        <label>
          Descrição
          <input value={description} onChange={e => setDescription(e.target.value)} maxLength={300} />
        </label>

        <div className="mediaPicker">
          <div className="mediaPicker__header">
            <span>Fotos</span>
            <small>Até 8 imagens</small>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={e => handleFiles(e.target.files)}
          />
          {images.length > 0 && (
            <div className="mediaGrid">
              {images.map((src, i) => (
                <div className="mediaThumb" key={i}>
                  <img src={src} alt={`foto ${i+1}`} />
                  <button type="button" className="link" onClick={() => removeImage(i)}>Remover</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="btn btn--lg" type="submit" disabled={loading}>
          {loading ? 'Publicando...' : 'Publicar anúncio'}
        </button>
      </form>
    </section>
  );
}



