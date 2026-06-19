const navbarHTML = `
<nav style="background: #004d40; padding: 15px; color: white; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
    <div style="font-weight: bold; font-size: 20px;">KRYA</div>
    <div>
        <a href="/KRYA-MASTER/index.html" style="color: white; margin: 0 10px; text-decoration: none;">Home</a>
        <a href="/KRYA-MASTER/marketplace/products.html" style="color: white; margin: 0 10px; text-decoration: none;">Shop</a>
        <a href="/KRYA-MASTER/rewards/rewards.html" style="color: white; margin: 0 10px; text-decoration: none;">Rewards</a>
        <a href="/KRYA-MASTER/admin/dashboard.html" style="color: white; margin: 0 10px; text-decoration: none;">Profile</a>
    </div>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', navbarHTML);
