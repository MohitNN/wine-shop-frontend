import Menu from '../../../data/admin/data/menu'

const state = {
    
    searchData: [],
    togglesidebar: true,
    toggleChatBar: false,
    data: [
        { "title": "Dashboard", "icon": "home", "type": "sub", "badgeType": "primary", "active": false },
        {
            "title": "Products",
            "icon": "box",
            "type": "sub",
            "active": false,
            "children": [{
                    "title": "Physical",
                    "type": "sub",
                    "active": false,
                    "children": [
                        { "path": "/physical/category", "title": "Category", "type": "link" },
                        { "path": "/physical/sub-category", "title": "Sub Category", "type": "link" },
                        { "path": "/physical/product-list", "title": "Product List", "type": "link" },
                        { "path": "/physical/product-detail", "title": "Product Detail", "type": "link" },
                        { "path": "/physical/add-product", "title": "Add Product", "type": "link" }
                    ]
                },
                {
                    "title": "Digital",
                    "type": "sub",
                    "active": false,
                    "children": [
                        { "path": "/digital/category", "title": "Category", "type": "link" },
                        { "path": "/digital/sub-category", "title": "Sub Category", "type": "link" },
                        { "path": "/digital/product-list", "title": "Product List", "type": "link" },
                        { "path": "/digital/add-product", "title": "Add Product", "type": "link" }
                    ]
                }
            ]
        },
        {
            "title": "Sales",
            "icon": "image",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/sales/order", "title": "Orders", "type": "link" },
                { "path": "/sales/transactions", "title": "Transactions", "type": "link" }
            ]
        },
        {
            "title": "Coupons",
            "icon": "tag",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/coupons/coupon-list", "title": "List Coupons", "type": "link" },
                { "path": "/coupons/add-coupon", "title": "Create Coupons ", "type": "link" }
            ]
        },
        {
            "title": "Pages",
            "icon": "clipboard",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/pages/page-list", "title": "List Page", "type": "link" },
                { "path": "/pages/create-page", "title": "Create Page", "type": "link" }
            ]
        },
        {
            "title": "Media",
            "path": "/app/media",
            "icon": "camera",
            "type": "link",
            "active": false

        },
        {
            "title": "Menus",
            "icon": "align-left",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/menus/menu-list", "title": "Menu list", "type": "link" },
                { "path": "/menus/create-menu", "title": "Create Menu", "type": "link" }
            ]
        },
        {
            "title": "Users",
            "icon": "user-plus",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/users/user-list", "title": "User List", "type": "link" },
                { "path": "/users/create-user", "title": "Create User", "type": "link" }
            ]
        },
        {
            "title": "Vendors",
            "icon": "users",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/vendors/vendor-list", "title": "Vendor List", "icon": "box", "type": "link" },
                { "path": "/vendors/create-vendor", "title": "Create Vendor", "icon": "box", "type": "link" }
            ]
        },

        {
            "title": "Localization",
            "icon": "chrome",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/localization/translations", "title": "Translations", "type": "link" },
                { "path": "/localization/currency-rates", "title": "Currency Rates", "type": "link" },
                { "path": "/localization/taxes", "title": "Taxes", "type": "link" }
            ]
        },
        {
            "path": "/app/reports",
            "title": "Reports",
            "icon": "bar-chart",
            "type": "link",
            "bookmark": true
        },
        {
            "title": "Settings",
            "icon": "settings",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/settings/profile", "title": "Profile", "type": "link" }
            ]
        },
        {
            "path": "/app/invoice",
            "title": "Invoice",
            "icon": "archive",
            "type": "link",
            "bookmark": true
        },
        {
            "path": "/auth/login",
            "title": "Login",
            "icon": "log-in",
            "type": "link",
            "bookmark": true
        }
    ],
}

// getters
const getters = {

}

// mutations
const mutations = {
    opensidebar: (state) => {
        state.togglesidebar = !state.togglesidebar
    },
    openChatSidebar: (state) => {
        state.toggleChatBar = !state.toggleChatBar;
    },
    searchTerm: (state, term) => {
        let items = [];
        term = term.toLowerCase();
        state.data.filter(menuItems => {
            if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
            }
            if (!menuItems.children) return false
            menuItems.children.filter(subItems => {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                    subItems.icon = menuItems.icon
                    items.push(subItems);
                }
                if (!subItems.children) return false
                subItems.children.filter(suSubItems => {
                    if (suSubItems.title.toLowerCase().includes(term)) {
                        suSubItems.icon = menuItems.icon
                        items.push(suSubItems);
                    }
                })
            })
            state.searchData = items
        });
    },
    setNavActive: (state, item) => {
        if (!item.active) {
            state.data.forEach(a => {
                if (state.data.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                })
            });
        }
        item.active = !item.active
    },
    setActiveRoute: (state, item) => {
        state.data.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                    }
                })
            }
        })
    }
};

// actions
const actions = {
    opensidebar: (context, term) => {
        context.commit('opensidebar', term)
    },
    openChatSidebar: (context, term) => {
        context.commit('openChatSidebar', term)
    },
    searchTerm: (context, term) => {
        context.commit('searchTerm', term)
    },
    setNavActive: (context, item) => {
        context.commit('setNavActive', item)
    },
    setActiveRoute: (context, item) => {
        context.commit('setActiveRoute', item)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}