
export const useProducts = () => {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;

    const fetchProducts = async (page = 1) => {
        try {
            console.log(`Fetching products for page ${page}...`);
            const data = await $fetch(`${apiBase}/products?page=${page}`);
            console.log("Fetched products:", data);
            return data; 
        } catch (error) {
            console.error("Error fetching products:", error);
            return null;
        }
    };
    

    const fetchProductById = async (id: number) => {
        try {
            console.log(`Fetching product with ID: ${id}`);
            const data = await $fetch(`${apiBase}/products/${id}`);
            console.log(`Fetched product ${id}:`, data);
            return data;
        } catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
            return null;
        }
    };

    const addProduct = async (product: Record<string, any>) => {
        try {
            console.log("Adding new product:", product);
            const data = await $fetch(`${apiBase}/products`, {
                method: "POST",
                body: product,
            });
            console.log("Product added:", data);
            return data;
        } catch (error) {
            console.error("Error adding product:", error);
            return null;
        }
    };

    const updateProduct = async (id: number, product: Record<string, any>) => {
        try {
            console.log(`Updating product with ID ${id}:`, product);
            const data = await $fetch(`${apiBase}/products/${id}`, {
                method: "PUT",
                body: product,
            });
            console.log(`Product ${id} updated:`, data);
            return data;
        } catch (error) {
            console.error(`Error updating product with ID ${id}:`, error);
            return null;
        }
    };

    const deleteProduct = async (id: number) => {
        try {
            console.log(`Deleting product with ID: ${id}`);
            await $fetch(`${apiBase}/products/${id}`, {
                method: "DELETE",
            });
            console.log(`Product ${id} deleted.`);
            return true; 
        } catch (error) {
            console.error(`Error deleting product with ID ${id}:`, error);
            return false;
        }
    };

    return { fetchProducts, fetchProductById, addProduct, updateProduct, deleteProduct };
};
