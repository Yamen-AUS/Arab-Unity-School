/**
 * AUS CMS — Shared Auth & Role Guard
 * Included in every CMS page. Provides:
 *   initAuth(options)   — reads ausUser from sessionStorage, populates header/sidebar, enforces role guard
 *   logout()            — clears session and redirects to login
 *   applySidebarRoles() — hides superadmin-only nav items from Marketing users
 *
 * options = {
 *   requireFull: false  // set true on pages restricted to Super Admin only
 * }
 *
 * Role rules:
 *   access = 'full'    → Super Admin — sees everything
 *   access = 'content' → Marketing  — cannot access: Users & Roles, Page Builder, Settings
 */

function initAuth(options) {
  options = options || {};
  var raw = sessionStorage.getItem('ausUser');
  if (!raw) { location.href = 'index.html'; return; }

  var u;
  try { u = JSON.parse(raw); } catch(e) { location.href = 'index.html'; return; }

  // Super Admin–only page guard
  if (options.requireFull && u.access !== 'full') {
    alert('Access denied. This section is restricted to Super Admin.');
    location.href = 'dashboard.html';
    return;
  }

  // Populate sidebar user block
  var avatar   = document.getElementById('userAvatar');
  var hAvatar  = document.getElementById('headerAvatar');
  var userName = document.getElementById('userName');
  var roleBadge = document.getElementById('roleBadge');

  if (avatar)   { avatar.textContent = u.initials;  avatar.style.background   = u.color; }
  if (hAvatar)  { hAvatar.textContent = u.initials; hAvatar.style.background  = u.color; }
  if (userName) { userName.textContent = u.name || u.role; }
  if (roleBadge) {
    roleBadge.textContent = u.role;
    roleBadge.style.background = u.color + '33';
    roleBadge.style.color = u.color;
  }

  // Apply role-based sidebar visibility
  applySidebarRoles(u.access);

  return u; // return user object for pages that need further checks
}

function logout() {
  sessionStorage.removeItem('ausUser');
  location.href = 'index.html';
}

/**
 * Hides nav items that Marketing users cannot access.
 * Items are identified by data-role="superadmin" attribute on the <a> tag.
 */
function applySidebarRoles(access) {
  if (access === 'full') return; // Super Admin sees everything
  // Hide all elements marked as superadmin-only
  document.querySelectorAll('[data-role="superadmin"]').forEach(function(el) {
    el.style.display = 'none';
  });
}
