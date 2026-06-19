// KRYA Global Navbar Component
const navbarHTML = `
<nav style="background: var(--primary-color); padding: 15px; color: white; display: flex; justify-content: space-between; align-items: center;">
    <div style="font-size: 24px; font-weight: bold; color: var(--accent-color);">KRYA</div>
    <div>
        <a href="index.html" style="color: white; margin: 0 10px; text-decoration: none;">Home</a>
        <a href="marketplace/products.html" style="color: white; margin: 0 10px; text-decoration: none;">Shop</a>
        <a href="rewards/rewards.html" style="color: white; margin: 0 10px; text-decoration: none;">Rewards</a>
        <a href="user/dashboard.html" style="color: white; margin: 0 10px; text-decoration: none;">Profile</a>
    </div>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);

