// Whiteboard JavaScript for pafool.github.io

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add a slight random rotation to text elements for a more hand-drawn feel
    const textElements = document.querySelectorAll('h1, h2, h3, p, li');
    
    textElements.forEach(element => {
        // Skip elements that already have marker classes to avoid overriding them
        if (!element.classList.contains('marker-blue') && 
            !element.classList.contains('marker-red') && 
            !element.classList.contains('marker-green') &&
            !element.classList.contains('marker-black')) {
            
            // Generate a small random rotation between -1 and 1 degrees
            const randomRotation = (Math.random() * 2 - 1).toFixed(1);
            element.style.transform = `rotate(${randomRotation}deg)`;
        }
    });
    
    // Make the whiteboard cards draggable for a more interactive experience
    const whiteboardCards = document.querySelectorAll('.whiteboard-card');
    
    whiteboardCards.forEach(card => {
        // Add position relative and cursor grab to indicate draggability
        card.style.position = 'relative';
        card.style.cursor = 'grab';
        
        let isDragging = false;
        let offsetX, offsetY;
        
        // Handle mouse events for dragging
        card.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        
        // Handle touch events for mobile dragging
        card.addEventListener('touchstart', startDragTouch);
        document.addEventListener('touchmove', dragTouch);
        document.addEventListener('touchend', endDrag);
        
        function startDrag(e) {
            isDragging = true;
            const rect = card.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            card.style.cursor = 'grabbing';
            card.style.zIndex = '100';
        }
        
        function startDragTouch(e) {
            if (e.touches.length === 1) {
                isDragging = true;
                const touch = e.touches[0];
                const rect = card.getBoundingClientRect();
                offsetX = touch.clientX - rect.left;
                offsetY = touch.clientY - rect.top;
                card.style.zIndex = '100';
            }
        }
        
        function drag(e) {
            if (!isDragging) return;
            
            // Get the container's boundaries
            const container = document.querySelector('.whiteboard-content');
            const containerRect = container.getBoundingClientRect();
            
            // Calculate new position while staying within boundaries
            let newX = e.clientX - offsetX - containerRect.left;
            let newY = e.clientY - offsetY - containerRect.top;
            
            // Apply the new position
            card.style.position = 'absolute';
            card.style.left = `${newX}px`;
            card.style.top = `${newY}px`;
        }
        
        function dragTouch(e) {
            if (!isDragging || e.touches.length !== 1) return;
            
            const touch = e.touches[0];
            
            // Get the container's boundaries
            const container = document.querySelector('.whiteboard-content');
            const containerRect = container.getBoundingClientRect();
            
            // Calculate new position while staying within boundaries
            let newX = touch.clientX - offsetX - containerRect.left;
            let newY = touch.clientY - offsetY - containerRect.top;
            
            // Apply the new position
            card.style.position = 'absolute';
            card.style.left = `${newX}px`;
            card.style.top = `${newY}px`;
            
            // Prevent scrolling while dragging
            e.preventDefault();
        }
        
        function endDrag() {
            isDragging = false;
            card.style.cursor = 'grab';
        }
    });
    
    // Make the sticky note draggable
    const stickyNote = document.querySelector('.sticky-note');
    
    if (stickyNote) {
        stickyNote.style.position = 'absolute';
        stickyNote.style.cursor = 'grab';
        
        let isDragging = false;
        let offsetX, offsetY;
        
        // Mouse events
        stickyNote.addEventListener('mousedown', startDragSticky);
        document.addEventListener('mousemove', dragSticky);
        document.addEventListener('mouseup', endDragSticky);
        
        // Touch events
        stickyNote.addEventListener('touchstart', startDragStickyTouch);
        document.addEventListener('touchmove', dragStickyTouch);
        document.addEventListener('touchend', endDragSticky);
        
        function startDragSticky(e) {
            isDragging = true;
            const rect = stickyNote.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            stickyNote.style.cursor = 'grabbing';
            stickyNote.style.zIndex = '100';
        }
        
        function startDragStickyTouch(e) {
            if (e.touches.length === 1) {
                isDragging = true;
                const touch = e.touches[0];
                const rect = stickyNote.getBoundingClientRect();
                offsetX = touch.clientX - rect.left;
                offsetY = touch.clientY - rect.top;
                stickyNote.style.zIndex = '100';
            }
        }
        
        function dragSticky(e) {
            if (!isDragging) return;
            
            // Get the container's boundaries
            const container = document.querySelector('.whiteboard-content');
            const containerRect = container.getBoundingClientRect();
            
            // Calculate new position while staying within boundaries
            let newX = e.clientX - offsetX - containerRect.left;
            let newY = e.clientY - offsetY - containerRect.top;
            
            // Apply the new position
            stickyNote.style.left = `${newX}px`;
            stickyNote.style.top = `${newY}px`;
        }
        
        function dragStickyTouch(e) {
            if (!isDragging || e.touches.length !== 1) return;
            
            const touch = e.touches[0];
            
            // Get the container's boundaries
            const container = document.querySelector('.whiteboard-content');
            const containerRect = container.getBoundingClientRect();
            
            // Calculate new position while staying within boundaries
            let newX = touch.clientX - offsetX - containerRect.left;
            let newY = touch.clientY - offsetY - containerRect.top;
            
            // Apply the new position
            stickyNote.style.left = `${newX}px`;
            stickyNote.style.top = `${newY}px`;
            
            // Prevent scrolling while dragging
            e.preventDefault();
        }
        
        function endDragSticky() {
            isDragging = false;
            if (stickyNote) {
                stickyNote.style.cursor = 'grab';
            }
        }
    }
    
    // Add "marker squeak" sounds when interacting with whiteboard elements
    const markerElements = document.querySelectorAll('.marker-blue, .marker-red, .marker-green, .marker-black');
    
    markerElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // You could add a subtle sound effect here if desired
            // For now, just add a subtle visual effect
            element.style.textShadow = '0 0 1px rgba(0,0,0,0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.textShadow = 'none';
        });
    });
    
    // Add eraser functionality - clicking an eraser will clear nearby text
    const erasers = document.querySelectorAll('.eraser');
    
    erasers.forEach(eraser => {
        eraser.style.cursor = 'pointer';
        
        eraser.addEventListener('click', () => {
            // Visual feedback
            eraser.style.transform = 'scale(0.95)';
            setTimeout(() => {
                eraser.style.transform = 'scale(1)';
            }, 200);
            
            // Find a random paragraph or list item and "erase" it temporarily
            const textElements = Array.from(document.querySelectorAll('p, li'));
            
            if (textElements.length > 0) {
                const randomElement = textElements[Math.floor(Math.random() * textElements.length)];
                const originalContent = randomElement.textContent;
                const originalOpacity = randomElement.style.opacity;
                
                // Create erasing effect
                randomElement.style.opacity = '0.2';
                
                // Restore after 2 seconds
                setTimeout(() => {
                    randomElement.style.opacity = originalOpacity || '1';
                }, 2000);
            }
        });
    });
});