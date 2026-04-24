"use client";

import { useState } from "react";
import { useProductStore, type Product } from "../store/useProductStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProductItem({ product }: { product: Product }) {
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateQuantity = useProductStore((state) => state.updateQuantity);

  const [draft, setDraft] = useState(String(product.quantity));

  return (
    <div className="flex items-center justify-between border p-4 rounded-lg">
      <div>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
      </div>

      <div className="flex gap-3 items-center">
        <span>${product.price}</span>

        <Input
          type="number"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="w-16"
        />

        <Button onClick={() => updateQuantity(product.id, Number(draft))}>
          Save
        </Button>

        <Button onClick={() => deleteProduct(product.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}